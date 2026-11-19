import { createFileRoute } from "@tanstack/react-router";
import {
  Download,
  ExternalLink,
  Printer,
  QrCode,
  RotateCcw,
} from "lucide-react";
import { useState } from "react";

import { RomanticCardBack, RomanticCardFront } from "@/components/RomanticCard";
import { downloadCardSidePng, type CardData } from "@/utils/exportCardPng";

const DEFAULT_SITE_URL =
  "https://ais-pre-ckaucnkml7e7e4qjdmvq7j-90852781969.europe-west3.run.app";

const INITIAL_CARD_DATA: CardData = {
  recipient: "Mon amour,",
  headline: "Quelque chose de précieux t’attend…",
  subtitle:
    "Une porte discrète vers notre histoire, gravée sur papier avant de s’ouvrir dans les étoiles.",
  message:
    "Chaque instant à tes côtés transforme l’ordinaire en éternité. Avant de découvrir la surprise que j’ai préparée pour toi, scanne simplement ce sceau et laisse-toi guider dans notre univers.",
  signature: "— Avec tout mon amour, ta Chouchou",
  footerNote: "Pour mon Roi · 8 décembre",
  targetUrl: DEFAULT_SITE_URL,
  usePlaceholder: false,
  showSecretCode: true,
  secretCodeHint: "DOUDOU",
};

type ViewMode = "both" | "front" | "back";

export const Route = createFileRoute("/carte")({
  head: () => ({
    meta: [
      { title: "Carte Romantique — Cadeau Physique" },
      {
        name: "description",
        content:
          "Carte physique romantique et raffinée avec QR Code menant vers le site surprise.",
      },
    ],
  }),
  component: RomanticCardStudio,
});

function RomanticCardStudio() {
  const [data, setData] = useState<CardData>(INITIAL_CARD_DATA);
  const [viewMode, setViewMode] = useState<ViewMode>("both");
  const [downloading, setDownloading] = useState<"front" | "back" | null>(null);

  function updateField<K extends keyof CardData>(key: K, value: CardData[K]) {
    setData((prev) => ({ ...prev, [key]: value }));
  }

  async function handleDownload(side: "front" | "back") {
    try {
      setDownloading(side);
      await downloadCardSidePng(side, data);
    } finally {
      setDownloading(null);
    }
  }

  const trimmedUrl = data.targetUrl.trim();
  const isHttpUrl = /^https?:\/\/.+/i.test(trimmedUrl);

  return (
    <div className="rc-studio">
      {/* Studio Top Bar (hidden on print) */}
      <header className="rc-topbar rc-no-print">
        <span className="rc-brand">Atelier Papier · Carte Cadeau</span>

        <div
          className="rc-view-switch"
          role="tablist"
          aria-label="Affichage de la carte"
        >
          {(
            [
              { id: "both", label: "Recto & Verso" },
              { id: "front", label: "Recto" },
              { id: "back", label: "Verso" },
            ] as const
          ).map((item) => (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={viewMode === item.id}
              onClick={() => setViewMode(item.id)}
              className={`rc-tab ${viewMode === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={() => window.print()}
          className="rc-btn-primary"
        >
          <Printer className="h-4 w-4" aria-hidden="true" />
          <span>Imprimer / PDF</span>
        </button>
      </header>

      {/* Main Split: Card Preview Stage + Customization Panel */}
      <div className="rc-workspace">
        <main className="rc-stage" aria-label="Aperçu de la carte physique">
          <div className={`rc-spread rc-spread-${viewMode}`}>
            {(viewMode === "both" || viewMode === "front") && (
              <div className="rc-card-slot">
                <span className="rc-slot-label rc-no-print">
                  Recto · Couverture
                </span>
                <RomanticCardFront data={data} />
              </div>
            )}
            {(viewMode === "both" || viewMode === "back") && (
              <div className="rc-card-slot">
                <span className="rc-slot-label rc-no-print">
                  Verso · Message & QR Code
                </span>
                <RomanticCardBack data={data} />
              </div>
            )}
          </div>
        </main>

        <aside
          className="rc-panel rc-no-print"
          aria-label="Personnalisation de la carte"
        >
          <div className="rc-panel-section">
            <h1 className="rc-panel-title">Personnaliser la carte</h1>
            <p className="rc-panel-lead">
              Carte physique prête à imprimer ou à exporter en PNG haute
              définition.
            </p>
          </div>

          <div className="rc-panel-section">
            <div className="rc-field-head">
              <label htmlFor="rc-url" className="rc-label">
                Lien du QR Code
              </label>
              {isHttpUrl && !data.usePlaceholder && (
                <a
                  href={trimmedUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rc-inline-link"
                >
                  <span>Tester le lien</span>
                  <ExternalLink className="h-3 w-3" aria-hidden="true" />
                </a>
              )}
            </div>
            <input
              id="rc-url"
              type="url"
              value={data.targetUrl}
              disabled={data.usePlaceholder}
              onChange={(e) => updateField("targetUrl", e.target.value)}
              placeholder="https://votre-lien-definitif.com"
              className="rc-input"
            />
            <label className="rc-checkbox-row">
              <input
                type="checkbox"
                checked={data.usePlaceholder}
                onChange={(e) =>
                  updateField("usePlaceholder", e.target.checked)
                }
              />
              <span>
                Lien définitif pas encore disponible (afficher l’emplacement
                réservé)
              </span>
            </label>
          </div>

          <div className="rc-panel-section rc-fields-grid">
            <div>
              <label htmlFor="rc-recipient" className="rc-label">
                Destinataire
              </label>
              <input
                id="rc-recipient"
                type="text"
                value={data.recipient}
                onChange={(e) => updateField("recipient", e.target.value)}
                className="rc-input"
              />
            </div>

            <div>
              <label htmlFor="rc-headline" className="rc-label">
                Titre (Recto)
              </label>
              <input
                id="rc-headline"
                type="text"
                value={data.headline}
                onChange={(e) => updateField("headline", e.target.value)}
                className="rc-input"
              />
            </div>

            <div>
              <label htmlFor="rc-subtitle" className="rc-label">
                Sous-titre (Recto)
              </label>
              <textarea
                id="rc-subtitle"
                rows={2}
                value={data.subtitle}
                onChange={(e) => updateField("subtitle", e.target.value)}
                className="rc-input rc-textarea"
              />
            </div>

            <div>
              <label htmlFor="rc-message" className="rc-label">
                Message d’amour (Verso)
              </label>
              <textarea
                id="rc-message"
                rows={4}
                value={data.message}
                onChange={(e) => updateField("message", e.target.value)}
                className="rc-input rc-textarea"
              />
            </div>

            <div>
              <label htmlFor="rc-signature" className="rc-label">
                Signature
              </label>
              <input
                id="rc-signature"
                type="text"
                value={data.signature}
                onChange={(e) => updateField("signature", e.target.value)}
                className="rc-input"
              />
            </div>

            <div>
              <label htmlFor="rc-footer" className="rc-label">
                Mention / Date (Bas du Recto)
              </label>
              <input
                id="rc-footer"
                type="text"
                value={data.footerNote}
                onChange={(e) => updateField("footerNote", e.target.value)}
                className="rc-input"
              />
            </div>

            <label className="rc-checkbox-row">
              <input
                type="checkbox"
                checked={data.showSecretCode}
                onChange={(e) =>
                  updateField("showSecretCode", e.target.checked)
                }
              />
              <span>
                Afficher le mot secret sur la carte ({data.secretCodeHint})
              </span>
            </label>
          </div>

          <div className="rc-panel-section rc-export-group">
            <button
              type="button"
              onClick={() => void handleDownload("front")}
              disabled={downloading !== null}
              className="rc-btn-secondary"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              <span>
                {downloading === "front"
                  ? "Export en cours…"
                  : "Télécharger Recto (PNG)"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => void handleDownload("back")}
              disabled={downloading !== null}
              className="rc-btn-secondary"
            >
              <QrCode className="h-4 w-4" aria-hidden="true" />
              <span>
                {downloading === "back"
                  ? "Export en cours…"
                  : "Télécharger Verso (PNG)"}
              </span>
            </button>

            <button
              type="button"
              onClick={() => setData(INITIAL_CARD_DATA)}
              className="rc-btn-ghost"
            >
              <RotateCcw className="h-3.5 w-3.5" aria-hidden="true" />
              <span>Réinitialiser le texte</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}

import QRCode from "qrcode";
import { useEffect, useState } from "react";

import type { CardData } from "@/utils/exportCardPng";

function CornerOrnament({ position }: { position: "tl" | "tr" | "bl" | "br" }) {
  const transforms: Record<typeof position, string> = {
    tl: "",
    tr: "scale(-1, 1)",
    bl: "scale(1, -1)",
    br: "scale(-1, -1)",
  };

  return (
    <svg
      viewBox="0 0 48 48"
      className={`rc-corner rc-corner-${position}`}
      style={{ transform: transforms[position] }}
      aria-hidden="true"
    >
      <path
        d="M4 32 V8 C4 5.8 5.8 4 8 4 H32"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M10 22 C10 14 14 10 22 10"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.9"
      />
      <circle cx="15" cy="15" r="1.8" fill="#842C3B" />
      <path
        d="M26 4 L28 7 L31 4"
        fill="none"
        stroke="currentColor"
        strokeWidth="0.8"
      />
    </svg>
  );
}

function CelestialRoseCrest() {
  return (
    <svg viewBox="0 0 180 180" className="rc-crest" aria-hidden="true">
      {/* Delicate outer orbital rings */}
      <circle
        cx="90"
        cy="90"
        r="76"
        fill="none"
        stroke="#B68B4C"
        strokeWidth="0.9"
        strokeDasharray="3 5"
      />
      <circle
        cx="90"
        cy="90"
        r="62"
        fill="none"
        stroke="#B68B4C"
        strokeWidth="1"
        opacity="0.65"
      />
      <circle
        cx="90"
        cy="90"
        r="52"
        fill="none"
        stroke="#842C3B"
        strokeWidth="0.8"
        opacity="0.45"
      />

      {/* Cardinal four-point stars */}
      <path
        d="M90 8 L92.5 14 L98.5 16.5 L92.5 19 L90 25 L87.5 19 L81.5 16.5 L87.5 14 Z"
        fill="#B68B4C"
      />
      <path
        d="M90 155 L92.5 161 L98.5 163.5 L92.5 166 L90 172 L87.5 166 L81.5 163.5 L87.5 161 Z"
        fill="#B68B4C"
      />

      {/* Botanical olive/rose sprigs embracing the heart */}
      <path
        d="M52 114 C44 96 46 72 60 56 M46 98 C39 94 37 88 39 83 M48 82 C42 77 41 71 44 66"
        fill="none"
        stroke="#B68B4C"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M128 114 C136 96 134 72 120 56 M134 98 C141 94 143 88 141 83 M132 82 C138 77 139 71 136 66"
        fill="none"
        stroke="#B68B4C"
        strokeWidth="1.2"
        strokeLinecap="round"
      />

      {/* Fine-line engraved central heart */}
      <path
        d="M90 118 C73 104 62 93 62 80 C62 71 69 65 77 65 C83 65 88 68 90 73 C92 68 97 65 103 65 C111 65 118 71 118 80 C118 93 107 104 90 118 Z"
        fill="#842C3B"
        fillOpacity="0.1"
        stroke="#842C3B"
        strokeWidth="1.5"
      />
      <circle cx="90" cy="86" r="2.6" fill="#B68B4C" />
    </svg>
  );
}

export function RomanticCardFront({ data }: { data: CardData }) {
  return (
    <article className="rc-sheet" aria-label="Recto de la carte romantique">
      <div className="rc-paper-grain" aria-hidden="true" />
      <div className="rc-inner-border">
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        <div className="rc-front-layout">
          <p className="rc-kicker">Pour toi · Édition privée</p>

          <CelestialRoseCrest />

          <div className="rc-title-group">
            <h2 className="rc-headline">{data.headline}</h2>
            <div className="rc-rule" aria-hidden="true">
              <span />
              <i>✦</i>
              <span />
            </div>
            <p className="rc-subtitle">{data.subtitle}</p>
          </div>

          <p className="rc-footer-note">{data.footerNote}</p>
        </div>

        <span className="rc-crop rc-crop-tl" aria-hidden="true" />
        <span className="rc-crop rc-crop-tr" aria-hidden="true" />
        <span className="rc-crop rc-crop-bl" aria-hidden="true" />
        <span className="rc-crop rc-crop-br" aria-hidden="true" />
      </div>
    </article>
  );
}

export function RomanticCardBack({ data }: { data: CardData }) {
  const [qrDataUrl, setQrDataUrl] = useState<string | null>(null);
  const cleanUrl = data.targetUrl.trim();
  const hasActiveQr = !data.usePlaceholder && cleanUrl.length > 0;

  useEffect(() => {
    let active = true;
    if (!hasActiveQr) {
      setQrDataUrl(null);
      return;
    }

    QRCode.toDataURL(cleanUrl, {
      width: 520,
      margin: 2,
      errorCorrectionLevel: "M",
      color: {
        dark: "#1F1916",
        light: "#FCF8F1",
      },
    })
      .then((url) => {
        if (active) setQrDataUrl(url);
      })
      .catch(() => {
        if (active) setQrDataUrl(null);
      });

    return () => {
      active = false;
    };
  }, [cleanUrl, hasActiveQr]);

  return (
    <article
      className="rc-sheet"
      aria-label="Verso de la carte avec message et QR code"
    >
      <div className="rc-paper-grain" aria-hidden="true" />
      <div className="rc-inner-border">
        <CornerOrnament position="tl" />
        <CornerOrnament position="tr" />
        <CornerOrnament position="bl" />
        <CornerOrnament position="br" />

        <div className="rc-back-layout">
          <div className="rc-letter-block">
            <p className="rc-salutation">{data.recipient}</p>
            <p className="rc-message">{data.message}</p>
            <p className="rc-signature">{data.signature}</p>
          </div>

          <div className="rc-rule" aria-hidden="true">
            <span />
            <i>♥</i>
            <span />
          </div>

          <div className="rc-qr-section">
            <div className="rc-qr-frame">
              <span className="rc-qr-tick rc-qr-tick-tl" aria-hidden="true" />
              <span className="rc-qr-tick rc-qr-tick-tr" aria-hidden="true" />
              <span className="rc-qr-tick rc-qr-tick-bl" aria-hidden="true" />
              <span className="rc-qr-tick rc-qr-tick-br" aria-hidden="true" />

              {hasActiveQr && qrDataUrl ? (
                <img
                  src={qrDataUrl}
                  alt={`QR Code menant vers ${cleanUrl}`}
                  className="rc-qr-img"
                />
              ) : (
                <div className="rc-qr-placeholder">
                  <span className="rc-qr-placeholder-title">
                    Emplacement QR Code
                  </span>
                  <span className="rc-qr-placeholder-sub">
                    32 × 32 mm · Lien définitif à insérer
                  </span>
                </div>
              )}
            </div>

            <p className="rc-scan-prompt">
              {hasActiveQr
                ? "Scanne avec ton téléphone pour ouvrir ta surprise"
                : "Scanne ce code dès qu’il sera en place"}
            </p>
            {data.showSecretCode && data.secretCodeHint.trim() && (
              <p className="rc-code-hint">
                Mot secret : <strong>{data.secretCodeHint.trim()}</strong>
              </p>
            )}
          </div>
        </div>

        <span className="rc-crop rc-crop-tl" aria-hidden="true" />
        <span className="rc-crop rc-crop-tr" aria-hidden="true" />
        <span className="rc-crop rc-crop-bl" aria-hidden="true" />
        <span className="rc-crop rc-crop-br" aria-hidden="true" />
      </div>
    </article>
  );
}

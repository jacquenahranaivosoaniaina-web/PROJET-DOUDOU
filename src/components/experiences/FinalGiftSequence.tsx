import { useEffect, useRef, useState, type MouseEvent } from "react";

import chestClosed from "@/assets/images/cosmic_chest_closed_1795041712158.jpg";
import chestAjar from "@/assets/images/cosmic_chest_ajar_1795041711299.jpg";
import boots from "@/assets/story/crampons.jpg";
import { Burst, RevealWords } from "@/components/experiences/Reveal";
import { warp } from "@/lib/cosmos-events";
import {
  COUNTDOWN_END_SYMBOL,
  COUNTDOWN_START,
  SURPRISE_MESSAGE,
} from "@/lib/universe";

type GiftStage = "countdown" | "chest" | "gift";
type ChestPhase = "sealed" | "ajar" | "opening";
type NoteTab = "message" | "terrain" | "promesse";

const DIAL_R = 62;
const DIAL_C = 2 * Math.PI * DIAL_R;

const COUNTDOWN_WHISPERS: Record<number, string> = {
  5: "Parmi des milliards d’étoiles dans notre ciel…",
  4: "Chaque battement nous rapproche du dernier secret…",
  3: "Une promesse gardée rien que pour toi…",
  2: "Ferme les yeux un instant, mon Roi…",
  1: "Voici la dernière merveille de notre univers.",
};

const GIFT_NOTES: Record<
  NoteTab,
  { label: string; title: string; lines: string[] }
> = {
  message: {
    label: "Le Message",
    title: "Pour chacun de tes élans",
    lines: [
      "Dans mon univers, il y a nos éclats de rire, nos nuits étoilées et cette fierté immense quand je te vois vivre ta passion.",
      "Ce cadeau final est une promesse : sur chaque pelouse, je serai toujours celle qui t’applaudit le plus fort.",
    ],
  },
  terrain: {
    label: "Sur le Terrain",
    title: "Ta paire de chaussures de football",
    lines: [
      "Pensées pour la vitesse, la précision et les grands soirs — elles n’attendent plus que tes premiers appuis sur le terrain.",
      "Chaque course, chaque passe et chaque but portera un peu de notre histoire.",
    ],
  },
  promesse: {
    label: "Notre Promesse",
    title: "Toujours dans ton camp",
    lines: [
      "Enfile-les, fais briller ton jeu et n’oublie jamais combien je t’admire et combien je t’aime.",
      "Envoie autant d’étoiles que tu veux — chacune est un vœu pour nos prochains chapitres.",
    ],
  },
};

export function FinalGiftSequence({
  onReplayJourney,
}: {
  onReplayJourney: () => void;
}) {
  const [stage, setStage] = useState<GiftStage>("countdown");
  const [count, setCount] = useState<number>(COUNTDOWN_START);
  const [countdownFlash, setCountdownFlash] = useState(false);
  const [chestPhase, setChestPhase] = useState<ChestPhase>("sealed");
  const [chestBurstId, setChestBurstId] = useState(0);
  const [giftBurstId, setGiftBurstId] = useState(1);
  const [wishesCount, setWishesCount] = useState(0);
  const [activeTab, setActiveTab] = useState<NoteTab>("message");
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Compte à rebours de 5 à 1
  useEffect(() => {
    if (stage !== "countdown") return;

    if (count <= 0) {
      setCountdownFlash(true);
      warp(0.7, 900);
      const t = setTimeout(() => {
        setCountdownFlash(false);
        setChestPhase("sealed");
        setStage("chest");
      }, 900);
      return () => clearTimeout(t);
    }

    const t = setTimeout(() => {
      setCount((c) => c - 1);
    }, 1150);

    return () => clearTimeout(t);
  }, [stage, count]);

  function handleAdvanceChest() {
    if (chestPhase === "sealed") {
      setChestPhase("ajar");
      setChestBurstId((n) => n + 1);
      warp(0.35, 650);
      return;
    }

    if (chestPhase === "ajar") {
      setChestPhase("opening");
      setChestBurstId((n) => n + 1);
      warp(0.85, 1100);
      timerRef.current = setTimeout(() => {
        setGiftBurstId((n) => n + 1);
        setStage("gift");
      }, 1350);
    }
  }

  function handleBootsTilt(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / Math.max(1, rect.width) - 0.5;
    const y = (e.clientY - rect.top) / Math.max(1, rect.height) - 0.5;
    setTilt({ rx: -y * 7, ry: x * 9 });
  }

  function handleStarWish() {
    setGiftBurstId((n) => n + 1);
    setWishesCount((n) => n + 1);
    warp(0.45, 700);
  }

  function handleReplayGift() {
    if (timerRef.current) clearTimeout(timerRef.current);
    setCount(COUNTDOWN_START);
    setCountdownFlash(false);
    setChestPhase("sealed");
    setStage("countdown");
    warp(0.3, 500);
  }

  const whisper = COUNTDOWN_WHISPERS[count] ?? COUNTDOWN_WHISPERS[1] ?? "";
  const activeNote = GIFT_NOTES[activeTab];

  if (stage === "countdown") {
    return (
      <div
        className={`finale-scene final-gift-fade ${countdownFlash ? "is-flashing" : ""}`}
      >
        {countdownFlash && <div className="final-gift-flash" aria-hidden />}
        <div className="archive-note">UNE DERNIÈRE SURPRISE T’ATTEND</div>

        <div className="final-countdown-stage">
          <div className="final-countdown-halo" aria-hidden />
          <div className="countdown-dial final-countdown-dial">
            <svg viewBox="0 0 148 148" aria-hidden>
              <circle className="final-orbit-dashed" cx="74" cy="74" r={70} />
              <circle className="countdown-track" cx="74" cy="74" r={DIAL_R} />
              <circle
                className="countdown-progress"
                cx="74"
                cy="74"
                r={DIAL_R}
                strokeDasharray={DIAL_C}
                strokeDashoffset={
                  DIAL_C * (Math.max(0, count) / COUNTDOWN_START)
                }
              />
            </svg>
            <span
              key={count}
              className="countdown countdown-pop final-countdown-num"
            >
              {count > 0 ? count : "✦"}
            </span>
          </div>
        </div>

        <p
          key={count}
          className="finale-line serif-italic is-current final-whisper"
        >
          {count > 0 ? whisper : "Révélation en cours…"}
        </p>

        <button
          type="button"
          className="nav-chip hud-mono hud-mono-bright mt-2"
          onClick={() => {
            setCount(0);
          }}
        >
          Ouvrir le coffre →
        </button>
      </div>
    );
  }

  if (stage === "chest") {
    return (
      <div className="finale-scene final-gift-fade">
        {chestPhase === "opening" && (
          <div className="final-gift-flash is-intense" aria-hidden />
        )}

        <div className="eyebrow">
          {chestPhase === "sealed"
            ? "✦ ÉTAPE 1 / 2 · LE SCEAU ASTRAL"
            : chestPhase === "ajar"
              ? "✦ ÉTAPE 2 / 2 · LA LUMIÈRE INTÉRIEURE"
              : "✦ LE COFFRE S’OUVRE…"}
        </div>

        <h3 className="exp-title my-1">
          {chestPhase === "sealed"
            ? "Un coffre mystérieux t’attend"
            : chestPhase === "ajar"
              ? "Une lueur dorée s’échappe déjà…"
              : "Découvre ton cadeau final"}
        </h3>

        <p className="serif-italic max-w-md text-[17px] text-mist">
          {chestPhase === "sealed"
            ? "Touche le coffre pour briser le sceau céleste."
            : chestPhase === "ajar"
              ? "Quelque chose pensé pour chacun de tes pas sur le terrain repose à l’intérieur…"
              : "Laisse les étoiles dévoiler la suite…"}
        </p>

        <div className="final-chest-wrap">
          <div className={`final-chest-aura is-${chestPhase}`} aria-hidden />
          {chestPhase !== "sealed" && (
            <div className={`final-chest-beam is-${chestPhase}`} aria-hidden />
          )}
          <Burst id={chestBurstId} count={28} />

          <button
            type="button"
            className={`final-chest-card is-${chestPhase}`}
            onClick={handleAdvanceChest}
            disabled={chestPhase === "opening"}
            aria-label={
              chestPhase === "sealed"
                ? "Briser le sceau du coffre mystérieux"
                : "Soulever le couvercle du coffre mystérieux"
            }
          >
            <img
              src={chestClosed}
              alt="Coffre mystérieux scellé par des constellations dorées"
              className={`final-chest-img ${chestPhase === "sealed" ? "is-visible" : ""}`}
            />
            <img
              src={chestAjar}
              alt="Coffre mystérieux entrouvert laissant échapper une lueur dorée"
              className={`final-chest-img ${chestPhase !== "sealed" ? "is-visible" : ""}`}
            />
            <span className="final-chest-scrim" aria-hidden />
            {chestPhase === "sealed" && (
              <span className="final-chest-seal" aria-hidden>
                ✦
              </span>
            )}
          </button>
        </div>

        <button
          type="button"
          className="cosmic-btn cosmic-btn-primary finale-next"
          onClick={handleAdvanceChest}
          disabled={chestPhase === "opening"}
        >
          {chestPhase === "sealed"
            ? "Briser le sceau ✦"
            : chestPhase === "ajar"
              ? "Soulever le couvercle ✦"
              : "Ouverture en cours…"}
        </button>
      </div>
    );
  }

  return (
    <div className="finale-scene final-gift-reveal">
      <div className="gift final-gift-showcase">
        <Burst id={giftBurstId} count={32} />

        <div className="eyebrow">✦ CADEAU FINAL RÉVÉLÉ</div>

        <div
          className="final-boots-stage"
          onMouseMove={handleBootsTilt}
          onMouseLeave={() => setTilt({ rx: 0, ry: 0 })}
          style={{
            transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          }}
        >
          <span className="final-boots-rays" aria-hidden />
          <img
            className="gift-img final-boots-img"
            src={boots}
            alt="Une paire de chaussures de football blanches et dorées posée sur un coussin étoilé"
            width={900}
            height={840}
          />
        </div>

        <div className="countdown my-1">{COUNTDOWN_END_SYMBOL}</div>
        <p className="finale-line serif-italic is-current">
          <RevealWords text={SURPRISE_MESSAGE} step={85} />
        </p>

        <div className="hud-box final-gift-card">
          <div
            className="final-gift-tabs"
            role="tablist"
            aria-label="Mots doux du cadeau"
          >
            {(["message", "terrain", "promesse"] as NoteTab[]).map((tabKey) => (
              <button
                key={tabKey}
                type="button"
                role="tab"
                aria-selected={activeTab === tabKey}
                className={`nav-chip hud-mono ${activeTab === tabKey ? "hud-mono-bright is-selected" : ""}`}
                onClick={() => setActiveTab(tabKey)}
              >
                {GIFT_NOTES[tabKey].label}
              </button>
            ))}
          </div>

          <div key={activeTab} className="final-gift-note">
            <h4 className="serif-italic text-[22px] text-blush">
              {activeNote.title}
            </h4>
            {activeNote.lines.map((line) => (
              <p key={line} className="mt-2 text-sm leading-relaxed text-mist">
                {line}
              </p>
            ))}
          </div>

          <div className="final-gift-actions">
            <button
              type="button"
              className="cosmic-btn cosmic-btn-primary"
              onClick={handleStarWish}
            >
              ✦ Envoyer une pluie d’étoiles
            </button>
            {wishesCount > 0 && (
              <span className="hud-mono hud-mono-bright tabular-nums">
                {wishesCount}{" "}
                {wishesCount > 1 ? "étoiles envoyées" : "étoile envoyée"}
              </span>
            )}
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            className="cosmic-btn cosmic-btn-ghost"
            onClick={handleReplayGift}
          >
            ↺ Revoir la révélation
          </button>
          <button
            type="button"
            className="cosmic-btn cosmic-btn-ghost"
            onClick={onReplayJourney}
          >
            ↺ Revivre le voyage
          </button>
        </div>
      </div>
    </div>
  );
}

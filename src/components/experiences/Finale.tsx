import { useEffect, useRef, useState } from "react";

import couple from "@/assets/story/couple-cosmos.jpg";
import galaxy from "@/assets/galaxy.jpg";
import { FilmExperience } from "@/components/experiences/Film";
import { FinalGiftSequence } from "@/components/experiences/FinalGiftSequence";
import { Burst, RevealWords } from "@/components/experiences/Reveal";
import { PlanetOrb } from "@/components/PlanetOrb";
import { warp } from "@/lib/cosmos-events";
import { FINALE_MESSAGES, LOVE_LETTER } from "@/lib/experiences";
import { PLANETS } from "@/lib/universe";

type Stage =
  | "start"
  | "journey"
  | "planets"
  | "heart"
  | "letter"
  | "film"
  | "gift_sequence";
const MESSAGE_MS = 2600;

function Next({
  onClick,
  children,
}: {
  onClick: () => void;
  children: string;
}) {
  return (
    <button
      type="button"
      className="cosmic-btn cosmic-btn-primary finale-next"
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function FinaleExperience() {
  const [stage, setStage] = useState<Stage>("start");
  const [msg, setMsg] = useState(0);

  // Camera journey -> planets
  useEffect(() => {
    if (stage !== "journey") return;
    warp(1, 2600);
    const t = setTimeout(() => setStage("planets"), 3400);
    return () => clearTimeout(t);
  }, [stage]);

  // Messages one after another while the planets appear
  useEffect(() => {
    if (stage !== "planets" || msg >= FINALE_MESSAGES.length) return;
    const t = setTimeout(
      () => setMsg((m) => m + 1),
      msg === 0 ? 2200 : MESSAGE_MS,
    );
    return () => clearTimeout(t);
  }, [stage, msg]);

  const shownMessages = FINALE_MESSAGES.slice(0, msg);

  return (
    <section className={`finale finale-${stage}`} aria-live="polite">
      {stage === "start" && (
        <div className="finale-scene rise-in">
          <div className="eyebrow">✦ LE VOYAGE FINAL</div>
          <h3 className="exp-title my-4">
            Prêt pour le cœur de notre univers ?
          </h3>
          <p className="mb-7 text-sm text-muted-foreground">
            Monte le son 🔊 et laisse-toi guider.
          </p>
          <Next onClick={() => setStage("journey")}>Commencer le voyage ✦</Next>
        </div>
      )}

      {stage === "journey" && (
        <div className="finale-scene">
          <div className="journey-galaxy" aria-hidden>
            <img src={galaxy} alt="" width={1024} height={1024} />
          </div>
          <p className="finale-line serif-italic">
            <RevealWords text="Voyage au cœur de notre galaxie…" step={120} />
          </p>
        </div>
      )}

      {stage === "planets" && (
        <div className="finale-scene">
          <div className="finale-planets">
            {PLANETS.map((p, i) => (
              <div
                key={p.slug}
                className="finale-planet"
                style={{ animationDelay: `${i * 450}ms` }}
              >
                <PlanetOrb planet={p} index={i} size="clamp(38px, 8vw, 64px)" />
                <span className="hud-mono">{p.name}</span>
              </div>
            ))}
          </div>
          <div className="finale-messages">
            {shownMessages.map((m, i) => (
              <p
                key={m}
                className={`finale-line serif-italic ${i === shownMessages.length - 1 ? "is-current" : ""}`}
              >
                <RevealWords text={m} step={90} />
              </p>
            ))}
          </div>
          {msg >= FINALE_MESSAGES.length && (
            <Next onClick={() => setStage("heart")}>Continuer ♥</Next>
          )}
        </div>
      )}

      {stage === "heart" && (
        <div className="finale-scene">
          <div className="giant-heart" aria-hidden>
            <span className="giant-heart-shape" />
            <img
              className="giant-heart-photo"
              src={couple}
              alt=""
              width={1024}
              height={1280}
            />
            <Burst id="heart" count={24} />
          </div>
          <p className="finale-line serif-italic is-current">
            <RevealWords
              text="Toi + moi = mon univers entier."
              delay={600}
              step={110}
            />
          </p>
          <Next onClick={() => setStage("letter")}>Lire ma lettre 💌</Next>
        </div>
      )}

      {stage === "letter" && (
        <div className="finale-scene">
          <article className="love-letter hud-box">
            {LOVE_LETTER.map((line, i) => (
              <p
                key={line}
                className="letter-line"
                style={{ animationDelay: `${400 + i * 1100}ms` }}
              >
                {line}
              </p>
            ))}
          </article>
          <Next onClick={() => setStage("film")}>Notre film 🎬</Next>
        </div>
      )}

      {stage === "film" && (
        <div className="finale-scene">
          <FilmExperience
            onDone={() => setStage("gift_sequence")}
            doneLabel="Découvrir le cadeau final ✦"
          />
        </div>
      )}

      {stage === "gift_sequence" && (
        <FinalGiftSequence
          onReplayJourney={() => {
            setStage("start");
            setMsg(0);
          }}
        />
      )}
    </section>
  );
}

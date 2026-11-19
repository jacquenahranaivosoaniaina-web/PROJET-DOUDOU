import { act, fireEvent, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";

import { FinalGiftSequence } from "@/components/experiences/FinalGiftSequence";
import { SURPRISE_MESSAGE } from "@/lib/universe";

describe("FinalGiftSequence (Mon univers, post-film)", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("runs the 5-to-1 countdown, opens the chest progressively, and reveals the football boots", () => {
    const onReplayJourney = vi.fn();
    render(<FinalGiftSequence onReplayJourney={onReplayJourney} />);

    // Starts at 5
    expect(screen.getByText("5")).toBeInTheDocument();

    // Advance 5 -> 4 -> 3 -> 2 -> 1 -> 0 -> flash -> chest
    for (let i = 0; i < 5; i++) {
      act(() => {
        vi.advanceTimersByTime(1150);
      });
    }
    act(() => {
      vi.advanceTimersByTime(900);
    });

    // Chest Step 1: sealed
    const sealButtons = screen.getAllByRole("button", { name: /briser le sceau/i });
    expect(sealButtons.length).toBeGreaterThan(0);
    fireEvent.click(sealButtons[0]!);

    // Chest Step 2: ajar
    const openButtons = screen.getAllByRole("button", { name: /soulever le couvercle/i });
    expect(openButtons.length).toBeGreaterThan(0);
    fireEvent.click(openButtons[0]!);

    // Cinematic opening transition -> football boots reveal
    act(() => {
      vi.advanceTimersByTime(1400);
    });

    expect(
      screen.getByAltText(/chaussures de football blanches et dorées/i),
    ).toBeInTheDocument();
    expect(screen.getByText(/Le Message/i)).toBeInTheDocument();
    expect(screen.getByText(/Sur le Terrain/i)).toBeInTheDocument();
    expect(screen.getByText(/Notre Promesse/i)).toBeInTheDocument();
    expect(SURPRISE_MESSAGE).toBeTruthy();
  });
});

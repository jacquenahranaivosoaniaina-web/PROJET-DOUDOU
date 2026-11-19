import { afterAll, describe, expect, it } from "vitest";

import { supabase } from "@/integrations/supabase/client";

describe("Supabase client fallback configuration", () => {
  afterAll(async () => {
    await supabase.auth.stopAutoRefresh();
  });

  it("initializes and subscribes to auth state without throwing when env vars are absent", () => {
    const { data } = supabase.auth.onAuthStateChange(() => {});
    expect(data.subscription).toBeDefined();
    expect(typeof data.subscription.unsubscribe).toBe("function");
    data.subscription.unsubscribe();
  });
});

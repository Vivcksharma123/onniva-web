"use client";

import { useEffect } from "react";

export default function ScrollToTopOnReload() {
  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Force scroll to top on load
    window.scrollTo(0, 0);
  }, []);

  return null;
}
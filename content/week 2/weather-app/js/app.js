import { initApp } from "./controller.js";
import { initTheme } from "./theme.js";

// Initialize theme first
initTheme();

// Then initialize app
initApp();
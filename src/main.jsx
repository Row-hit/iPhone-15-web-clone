import { StrictMode, useEffect } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import * as Sentry from "@sentry/react";
import React from "react";

Sentry.init({
  dsn: "https://c73225839399f965bea387a72d05336e@o4508799242928128.ingest.us.sentry.io/4508799248629760",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration(),
  ],
  tracesSampleRate: 1,

  tracePropagationTargets: ["localhost", /^https:\/\/yourserver\.io\/api/],

  replaysSessionSampleRate: 0.1,

  replaysOnErrorSampleRate: 1.0,
});

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);

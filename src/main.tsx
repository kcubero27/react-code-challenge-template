import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";
import { type MockedRequest, rest } from "msw";
import { worker } from "@tests/api/browser";
import "./index.css";

if (!import.meta.env.PROD) {
  void import("@axe-core/react").then((axe) => {
    void axe.default(React, ReactDOM, 1000);
  });
}

const mockRequestsIfServiceWorkerIsEnabled = (): Promise<any> => {
  if (import.meta.env.VITE_IS_MOCK_SERVICE_WORKER_ENABLED === "true") {
    window.msw = { rest, worker };

    return worker.start({
      onUnhandledRequest: (req: MockedRequest) => {
        console.error("Found an unhandled %s request to %s", req.method, req.url.href);
      },
    });
  }
  return Promise.resolve();
};

void mockRequestsIfServiceWorkerIsEnabled().then(() => {
  const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
});

import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/App";

if (!import.meta.env.PROD) {
  void import("@axe-core/react").then((axe) => {
    void axe.default(React, ReactDOM, 1000);
  });
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

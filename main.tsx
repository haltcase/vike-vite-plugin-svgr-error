import React from "react";
import { createRoot } from "react-dom/client";

import Page from "./pages/index/+Page.js";

const element = document.querySelector("#root");

if (element != null) {
  createRoot(element).render(
    <React.Suspense fallback={<div>Loading...</div>}>
      <Page />
    </React.Suspense>
  );
}

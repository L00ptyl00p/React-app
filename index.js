import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Weather from "./Weather";

import "./Weather.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather />
    </div>
  </StrictMode>
);

<p>
  Open sourced at <a href="https://github.com/L00ptyl00p">GitHub</a> hosted on
  <a href="https://storied-faloodeh-fdd58a.netlify.app/">Netlify</a>
</p>;

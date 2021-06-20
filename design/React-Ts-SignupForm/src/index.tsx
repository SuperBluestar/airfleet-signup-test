import * as React from "react";
import { render } from "react-dom";
import App from "./App";

import "./assets/scss/bootstrap.customize.scss";
import "./assets/scss/app.style.scss";

const rootEl = document.getElementById("root");

render(<App />, rootEl);

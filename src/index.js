import React from "react";
import ReactDOM from "react-dom";
import AsyncApiComponent from "@asyncapi/react-component";

import { specMock } from "./mock";
import "@asyncapi/react-component/lib/styles/fiori.css";
import "./styles.css";

const rootElement = document.getElementById("root");
ReactDOM.render(<AsyncApiComponent schema={specMock} />, rootElement);

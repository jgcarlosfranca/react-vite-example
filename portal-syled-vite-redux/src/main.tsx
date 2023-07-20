import React from "react";
import { makeMirageServer } from "./Mocks/Server/server";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from "./redux/Store";
import App from "./App";

import "./Styles/reset.css";

if (import.meta.env.DEV) {
  makeMirageServer();
}

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

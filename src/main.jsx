import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthProvider from "./Context/Store.jsx";
import { BrowserRouter } from "react-router-dom";
import { UtilsContextProvider } from "./Context/UtilsContext.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <UtilsContextProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </UtilsContextProvider>
    </BrowserRouter>
  </StrictMode>
);

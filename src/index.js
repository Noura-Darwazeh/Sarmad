import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import routerConfig from "./Route";
import { RouterProvider } from "react-router-dom";
import { Theme } from "./utils/Theme";
import { ThemeProvider } from "styled-components";
import { ImageUploadProvider } from "./utils/ImageUploadContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <ImageUploadProvider>
        <RouterProvider router={routerConfig} />
      </ImageUploadProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

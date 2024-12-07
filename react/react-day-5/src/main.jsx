import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./global.css";
import App from "./App.jsx";
import { createBrowserRouter, Router, RouterProvider } from "react-router-dom";
import LoginProvider from "./context/LoginProvider.jsx";
import ProductProvider from "./context/ProductProvider.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ProductProvider>
      <LoginProvider>
        <RouterProvider router={router} />
      </LoginProvider>
    </ProductProvider>
  </StrictMode>
);

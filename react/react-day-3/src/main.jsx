import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Products from "./Components/Products.jsx";
import Product from "./Components/Product.jsx";
import Logger from "./Components/Logger.jsx";

const routerInstance = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
    children: [
      {
        path: "something",
        element: <Logger />,
      },
    ],
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/home",
    element: <Home />,
  },

  {
    path: "/products",
    element: <Products />,
  },
  {
    path: "/product/:slug",
    element: <Product />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerInstance}>
      <App />
    </RouterProvider>
  </StrictMode>
);

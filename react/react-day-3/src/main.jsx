import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./Components/Login.jsx";
import About from "./Components/About.jsx";
import Contact from "./Components/Contact.jsx";
import Home from "./Components/Home.jsx";
import Products from "./Components/Products.jsx";

const routerInstance = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
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
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={routerInstance}>
      <App />
    </RouterProvider>
  </StrictMode>
);

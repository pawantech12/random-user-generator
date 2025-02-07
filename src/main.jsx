import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import GenerateUsers from "./pages/GenerateUsers";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <App element={<Home />} />
      </>
    ),
  },
  {
    path: "/generate-users",
    element: (
      <>
        <App element={<GenerateUsers />} />
      </>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer position="top-right" />
  </StrictMode>
);

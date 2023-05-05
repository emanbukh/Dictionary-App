import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Meaning from "./pages/Meaning";
import { BASEURL } from "./constant/config";
type DefinitionType = null | any;

function App() {
  const router = createBrowserRouter([
    {
      path: BASEURL,
      element: <Home />,
    },
    { path: BASEURL + "/job/:id", element: <Meaning /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

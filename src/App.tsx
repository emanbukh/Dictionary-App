import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Meaning from "./pages/Meaning";
import { BASEURL } from "./constant/config";


function App() {
  const router = createBrowserRouter([
    {
      path: BASEURL,
      element: <Home />,
    },
    { path: BASEURL + ":word", element: <Meaning /> },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

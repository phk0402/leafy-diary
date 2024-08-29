import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "~/pages/Home";

const routers = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function Router() {
  return <RouterProvider router={routers} />;
}

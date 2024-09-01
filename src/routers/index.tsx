import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { ROUTE_LIST } from "~/constants/route";

const routers = createBrowserRouter(ROUTE_LIST);

export default function Router() {
  return <RouterProvider router={routers} />;
}

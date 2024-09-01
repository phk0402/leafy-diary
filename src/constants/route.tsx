// home
import Home from "~/pages/Home";

// diary
import DiaryList from "~/pages/Diary/List";
import DiaryDetail from "~/pages/Diary/Detail";
import DiaryEdit from "~/pages/Diary/Edit";

// error
import ErrorPage from "~/pages/Error";

export const ROUTE_LIST = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/diary",
    children: [
      { path: "", element: <DiaryList /> },
      { path: "detail", element: <DiaryDetail /> },
      { path: "edit", element: <DiaryEdit /> },
    ],
  },
  { path: "404", element: <ErrorPage /> },
  { path: "500", element: <ErrorPage /> },
];

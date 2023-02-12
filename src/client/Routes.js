import App from "./App";
import AdminListPage from "./pages/AdminListPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import UsersListPage from "./pages/UsersListPage";

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: "/",
        exact: true,
      },
      {
        ...AdminListPage,
        path: "/admins",
      },
      {
        ...UsersListPage,
        path: "/users",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];

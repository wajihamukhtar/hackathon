// Auth
import Login from "../auth/login";
import Signup from "../auth/signup";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import { NavbarLayout } from "../layouts/NavbarLayout";
import { SidebarLayout } from "../layouts/SidebarLayout";

// Private
import Page_1 from "../screens/page_1";
import Page_2 from "../screens/page_2";

export const routes = {
  // public routes
  login: "/",
  signup: "/signup",
  resetpassword: "/resetpassword",
  error: "*",
  // private routes
  page_1: "/page-1",
  page_2: "/page-2",
};

export const publicRoutes = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: routes.login,
        element: <Login />,
      },
      {
        path: routes.signup,
        element: <Signup />,
      },
      // {
      //   path: routes.resetpassword,
      //   element: <ResetPassword />,
      // },
      {
        path: routes.navbar,
        element: <NavbarLayout />,
      },
      {
        path: routes.sidebar,
        element: <SidebarLayout />,
      },
    ],
  },
];

export const privateRoutes = [
  {
    element: <DashboardLayout />,
    children: [
      {
        path: routes.page_1,
        element: <Page_1 />,
      },
      {
        path: routes.page_2,
        element: <Page_2 />,
      },
    ],
  },
];

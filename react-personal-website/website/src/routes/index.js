import { Suspense, lazy } from "react";
import { Navigate, useRoutes } from "react-router-dom";

// Config.
import { DEFAULT_PATH } from "../config";

// Layouts.
import MainLayout from "../layouts/main";

// Components.
import LoadingScreen from "../components/loading-screen";


// ---------------------------------------------------------

const Loadable = (Component) => (props) => {
  return (
    <Suspense fallback={<LoadingScreen />}>
      <Component {...props} />
    </Suspense>
  );
};

const Homepage = Loadable(lazy(() => import("../pages/homepage")));
const Experience = Loadable(lazy(() => import("../pages/experience")));
const Work = Loadable(lazy(() => import("../pages/work")));
const Playground = Loadable(lazy(() => import("../pages/playground")));
const Contact = Loadable(lazy(() => import("../pages/contact")));

const Page404 = Loadable(lazy(() => import("../pages/page-404")));


// ---------------------------------------------------------

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { element: <Navigate to={DEFAULT_PATH} replace />, index: true },
        { path: "home", element: <Homepage /> },
        { path: "experience", element: <Experience /> },
        { path: "work", element: <Work /> },
        { path: "playground", element: <Playground /> },
        { path: "contact", element: <Contact /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
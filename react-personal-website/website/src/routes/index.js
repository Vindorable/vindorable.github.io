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

const Pokemon = Loadable(lazy(() => import("../pages/pokemon")));
const DST = Loadable(lazy(() => import("../pages/playground/dst-mods")));
const DSTBDayCakeMod = Loadable(lazy(() => import("../pages/playground/dst-mods/bday-cake-mod")));
const DSTBootyPackMod = Loadable(lazy(() => import("../pages/playground/dst-mods/booty-pack-mod")));
const DSTDotaWeaponsMod = Loadable(lazy(() => import("../pages/playground/dst-mods/dota-weapons-mod")));
const Games = Loadable(lazy(() => import("../pages/playground/games")));
const GameFrankritEatsMeat = Loadable(lazy(() => import("../pages/playground/games/frankrit-eats-meat")));
const GameFrankritEatsMeatPresskit = Loadable(lazy(() => import("../pages/playground/games/frankrit-eats-meat-presskit")));
const GameSharkABoom = Loadable(lazy(() => import("../pages/playground/games/shark-a-boom")));
const GameDinoWithAGun = Loadable(lazy(() => import("../pages/playground/games/dino-with-a-gun")));
const GameDevJourney = Loadable(lazy(() => import("../pages/playground/games/dev-journey")));
const GamePrivacyPolicy = Loadable(lazy(() => import("../pages/playground/games/privacy-policy")));
const UnrulyGent = Loadable(lazy(() => import("../pages/unruly-gent")));
const UnrulyGentBlogPost01 = Loadable(lazy(() => import("../pages/unruly-gent-blog-post-1")));
const UnrulyGentBlogPost02 = Loadable(lazy(() => import("../pages/unruly-gent-blog-post-2")));
const Photography = Loadable(lazy(() => import("../pages/photography")));

const TronDAOStickers = Loadable(lazy(() => import("../pages/trondao-stickers")));

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

        { path: "playground/pokemon", element: <Pokemon /> },
        { path: "playground/dst", element: <DST /> },
        { path: "playground/dst/birthday-cake-mod", element: <DSTBDayCakeMod /> },
        { path: "playground/dst/booty-pack-mod", element: <DSTBootyPackMod /> },
        { path: "playground/dst/dota-weapons-mod", element: <DSTDotaWeaponsMod /> },
        { path: "playground/games", element: <Games /> },
        { path: "playground/games/frankrit-eats-meat", element: <GameFrankritEatsMeat /> },
        { path: "playground/games/frankrit-eats-meat/presskit", element: <GameFrankritEatsMeatPresskit /> },
        { path: "playground/games/shark-a-boom", element: <GameSharkABoom /> },
        { path: "playground/games/dino-with-a-gun", element: <GameDinoWithAGun /> },
        { path: "playground/games/dev-journey", element: <GameDevJourney /> },
        { path: "playground/games/privacy-policy", element: <GamePrivacyPolicy /> },
        { path: "playground/unruly-gent", element: <UnrulyGent /> },
        { path: "playground/unruly-gent-blog-post-1", element: <UnrulyGentBlogPost01 /> },
        { path: "playground/unruly-gent-blog-post-2", element: <UnrulyGentBlogPost02 /> },
        { path: "playground/photography", element: <Photography /> },

        { path: "work/trondao-stickers", element: <TronDAOStickers /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}
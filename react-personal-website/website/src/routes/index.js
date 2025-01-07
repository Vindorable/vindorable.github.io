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
const UnrulyGent = Loadable(lazy(() => import("../pages/playground/unruly-gent")));
const UnrulyGentBlogPost01 = Loadable(lazy(() => import("../pages/playground/unruly-gent/blog/post-1")));
const UnrulyGentBlogPost02 = Loadable(lazy(() => import("../pages/playground/unruly-gent/blog/post-2")));
const Photography = Loadable(lazy(() => import("../pages/photography")));

const TronDAOStickers = Loadable(lazy(() => import("../pages/trondao-stickers")));

const Page404 = Loadable(lazy(() => import("../pages/page-404")));


// ---------------------------------------------------------
// REDIRECT ROUTES SECTION

const Redirect7d67b = () => {
  // Usage: Amazon KDP QR code printed on the back of the Dino with a Gun weekday vibes notebooks.
  // Reason:
  //   I generate my QR code from https://mini-qr-code-generator.vercel.app/ (Github: https://github.com/lyqht/mini-qr).
  //   But this QR code is static. Once printed I cannot change the link it directs to. I intend to send the link to my Dino with a Gun's Linktree.
  //   What if Linktree is down? Whatever the reasons, Linktree is a business and anything can happen.
  //   I decide to link the QR code to 'https://vindorable.github.io/#/redirect/7d67b' (Note: Not 'http://localhost:3000/#/redirect/7d67b'.).
  //   This is also risky... Because Github Pages too may be down and what if they change their URL like previously from '.com' to now '.io'?
  //   Safest is to link it to my domain. But I have to look into it.
  //   Because even though 'Jayondope.com' is now free from Squarespace, idk if I want to change to a more professional sounding one.
  //   So I just use the Github Pages link for now.
  //   Instead of redirecting users directly to my Linktree when they scan the QR code which brings them here, I want to send them to Bit.ly.
  //   This will provide me with tracking data. From Bit.ly I will send users to my Linktree.
  //   Why am I not using Bit.y for QR generation? Because the design is limited unless I subscribe. Also, no capability to change the redirect link unless subscribed.
  //   This method lets me customize a nice QR code design and also gives me the flexibility to change the redirect link if needed.
  //   QR code image and SVG is in the same folder as this script.
  window.location.href = "https://bit.ly/7d67b";
  return null;
};


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
        { path: "playground/unruly-gent/blog/post-1", element: <UnrulyGentBlogPost01 /> },
        { path: "playground/unruly-gent/blog/post-2", element: <UnrulyGentBlogPost02 /> },
        { path: "playground/photography", element: <Photography /> },

        { path: "work/trondao-stickers", element: <TronDAOStickers /> },

        // Redirect routes.
        // DO NOT CHANGE THIS. READ THE 'element:' INFO ABOVE IN THE 'REDIRECT ROUTES SECTION'.
        { path: "redirect/7d67b", element: <Redirect7d67b /> },

        { path: "404", element: <Page404 /> },
        { path: "*", element: <Navigate to="/404" replace /> },
      ],
    },
    { path: "*", element: <Navigate to="/404" replace /> },
  ]);
}



// ---------------------------------------------------------

const ROOTS_WEBPAGE = "/";

function path(root, sublink) {
  return `${root}${sublink}`;
}


// ---------------------------------------------------------

export const PATH_WEBPAGE = {
  root: ROOTS_WEBPAGE,
  general: {
    home: path(ROOTS_WEBPAGE, "home"),
    experience: path(ROOTS_WEBPAGE, "experience"),
    work: path(ROOTS_WEBPAGE, "work"),
    playground: path(ROOTS_WEBPAGE, "playground"),
    contact: path(ROOTS_WEBPAGE, "contact"),
  },
  playgroundSubpage: {
    pokemon: path(`${ROOTS_WEBPAGE}playground/`, "pokemon"),
    dst: path(`${ROOTS_WEBPAGE}playground/`, "dst"),
    dstBDayCakeMod: path(`${ROOTS_WEBPAGE}playground/dst/`, "birthday-cake-mod"),
    dstBootyPackMod: path(`${ROOTS_WEBPAGE}playground/dst/`, "booty-pack-mod"),
    dstDotaWeaponsMod: path(`${ROOTS_WEBPAGE}playground/dst/`, "dota-weapons-mod"),
    games: path(`${ROOTS_WEBPAGE}playground/`, "games"),
    gameFrankritEatsMeat: path(`${ROOTS_WEBPAGE}playground/games/`, "frankrit-eats-meat"),
    gameFrankritEatsMeatPresskit: path(`${ROOTS_WEBPAGE}playground/games/frankrit-eats-meat/`, "presskit"),
    gameSharkABoom: path(`${ROOTS_WEBPAGE}playground/games/`, "shark-a-boom"),
    gameDinoWithAGun: path(`${ROOTS_WEBPAGE}playground/games/`, "dino-with-a-gun"),
    gameDevJourney: path(`${ROOTS_WEBPAGE}playground/games/`, "dev-journey"),
    gamePrivacyPolicy: path(`${ROOTS_WEBPAGE}playground/games/`, "privacy-policy"),
    unrulyGent: path(`${ROOTS_WEBPAGE}playground/`, "unruly-gent"),
    unrulyGentBlogPost01: path(`${ROOTS_WEBPAGE}playground/unruly-gent/blog/`, "post-1"),
    unrulyGentBlogPost02: path(`${ROOTS_WEBPAGE}playground/unruly-gent/blog/`, "post-2"),
    photography: path(`${ROOTS_WEBPAGE}playground/`, "photography"),
  },
  workSubpage: {
    tronDAOStickers: path(`${ROOTS_WEBPAGE}work/`, "trondao-stickers"),
  },
  // Redirect routes.
  // DO NOT CHANGE THIS. READ THE 'REDIRECT ROUTES SECTION' IN THE 'ROUTES > INDEX.JS' SCRIPT.
  redirect: {
    path7d67b: path(ROOTS_WEBPAGE, "redirect/7d67b"),
  },
};
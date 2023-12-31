


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
  },
};
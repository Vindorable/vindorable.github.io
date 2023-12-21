


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
  },
};
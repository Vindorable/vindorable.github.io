//import image from "./20190621_145601_edit+(IG).png"


// ---------------------------------------------------------

function importAll(r) {
  return r.keys().map(r);
}

const importedImages = importAll(require.context('./', false, /\.(png|jpe?g|svg)$/));

// Note: The imported order is based on name order of the files.
const imageList = [
  {
    img: importedImages[0],
    title: "01+loading+screen",
  },
  {
    img: importedImages[1],
    title: "02+connects+to+game+services",
  },
  {
    img: importedImages[2],
    title: "03+reads+cloud+game+save",
  },
  {
    img: importedImages[3],
    title: "04+shop+menu",
  },
  {
    img: importedImages[4],
    title: "05+stats+menu",
  },
  {
    img: importedImages[5],
    title: "06+battle+play+menu",
  },
  {
    img: importedImages[6],
    title: "07+customization+menu",
  },
  {
    img: importedImages[7],
    title: "08+inventory+menu",
  },
  {
    img: importedImages[8],
    title: "09+user+name+editor",
  },
  {
    img: importedImages[9],
    title: "10+user+avatar+selector",
  },
  {
    img: importedImages[10],
    title: "11+game+region+selector+01",
  },
  {
    img: importedImages[11],
    title: "12+game+region+selector+02",
  },
  {
    img: importedImages[12],
    title: "13+settings+panel",
  },
  {
    img: importedImages[13],
    title: "14+daily+rewards",
  },
  {
    img: importedImages[14],
    title: "15+auto-matchmaking",
  },
  {
    img: importedImages[15],
    title: "16+hosted+game",
  },
  {
    img: importedImages[16],
    title: "17+join+hosted+game",
  },
  {
    img: importedImages[17],
    title: "18+game+map",
  },
  {
    img: importedImages[18],
    title: "19+skill+aimer",
  },
  {
    img: importedImages[19],
    title: "20+skill+projectile",
  },
  {
    img: importedImages[20],
    title: "21+basic+projectile",
  },
  {
    img: importedImages[21],
    title: "22+death+overlay",
  },
  {
    img: importedImages[22],
    title: "23+match+results",
  },
];


// ---------------------------------------------------------

export { imageList };
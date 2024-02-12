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
    title: "",
  },
  {
    img: importedImages[1],
    title: "",
  },
  {
    img: importedImages[2],
    title: "",
  },
  {
    img: importedImages[3],
    title: "",
  },
  {
    img: importedImages[4],
    title: "",
  },
  {
    img: importedImages[5],
    title: "",
  },
  {
    img: importedImages[6],
    title: "",
  },
  {
    img: importedImages[7],
    title: "",
  },
  {
    img: importedImages[8],
    title: "",
  },
  {
    img: importedImages[9],
    title: "",
  },
];


// ---------------------------------------------------------

export { imageList };
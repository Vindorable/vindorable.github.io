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
];


// ---------------------------------------------------------

export { imageList };
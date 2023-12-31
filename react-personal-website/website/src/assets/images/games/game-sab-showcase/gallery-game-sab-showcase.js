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
  {
    img: importedImages[10],
    title: "",
  },
  {
    img: importedImages[11],
    title: "",
  },
  {
    img: importedImages[12],
    title: "",
  },
  {
    img: importedImages[13],
    title: "",
  },
  {
    img: importedImages[14],
    title: "",
  },
  {
    img: importedImages[15],
    title: "",
  },
  {
    img: importedImages[16],
    title: "",
  },
  {
    img: importedImages[17],
    title: "",
  },
  {
    img: importedImages[18],
    title: "",
  },
  {
    img: importedImages[19],
    title: "",
  },
  {
    img: importedImages[20],
    title: "",
  },
  {
    img: importedImages[21],
    title: "",
  },
  {
    img: importedImages[22],
    title: "",
  },
];


// ---------------------------------------------------------

export { imageList };
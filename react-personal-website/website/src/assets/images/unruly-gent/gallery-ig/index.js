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
    href: buildIGLink(importedImages[0]),
  },
  {
    img: importedImages[1],
    title: "",
    href: buildIGLink(importedImages[1]),
  },
  {
    img: importedImages[2],
    title: "",
    href: buildIGLink(importedImages[2]),
  },
  {
    img: importedImages[3],
    title: "",
    href: buildIGLink(importedImages[3]),
  },
  {
    img: importedImages[4],
    title: "",
    href: buildIGLink(importedImages[4]),
  },
];

function buildIGLink(img) {
  var staticLink = img;
  // eg. /static/media/pic-1,p_swhhCcBb5A.e8e60b4d4ed0c2497f3a.jpg
  var postType = staticLink.split(",")[1].split("_")[0];
  // eg. p
  var postId = staticLink.split(",")[1].split("_")[1].split(".")[0];
  // eg. swhhCcBb5A
  return `https://www.instagram.com/${postType}/${postId}/`
}


// ---------------------------------------------------------

export { imageList };
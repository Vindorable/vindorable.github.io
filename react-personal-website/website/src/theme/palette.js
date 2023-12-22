// https://mui.com/material-ui/customization/default-theme/
// https://mui.com/material-ui/customization/color/
// https://m2.material.io/inline-tools/color/
import { alpha } from "@mui/material/styles";


// ---------------------------------------------------------

const palette = {
  light: {
    mode: "light",
    text: { primary: alpha("#000", 0.87), secondary: alpha("#000", 0.6), disabled: alpha("#000", 0.38) },
    background: { paper: "#F8FAFF", default: "#fff", defaultInverse: "rgb(22, 22, 22)" },
    divider: alpha("#000", 0.12), // default mui theme
    dividerCustom: { strong: alpha("#000", 0.3) }
  },
  dark: {
    mode: "dark",
    text: { primary: "#fff", secondary: alpha("#fff", 0.7), disabled: alpha("#fff", 0.5) },
    background: { paper: "rgb(24, 24, 24)", default: "rgb(22, 22, 22)", defaultInverse: "#fff" },
    divider: alpha("#fff", 0.12), // default mui theme
    dividerCustom: { strong: alpha("#fff", 0.3) }
  },
};


// ---------------------------------------------------------

export default palette;
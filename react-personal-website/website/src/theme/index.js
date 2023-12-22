import { useMemo } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import palette from "./palette";


// ---------------------------------------------------------

export default function ThemeProvider({ children }) {
  const isLight = false;

  const themeOptions = useMemo(
    () => ({
      palette: isLight ? palette.light : palette.dark,
    }),
  );

  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
}
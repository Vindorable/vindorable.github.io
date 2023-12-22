// Routes.
import Router from "./routes";

// Theme.
import ThemeProvider from "./theme";


// ---------------------------------------------------------

function App() {
  return (
    <>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </>
  );
}


// ---------------------------------------------------------

export default App;
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import light from "./styles/themes/light";
import GSAPPlugins from "./components/GSAPPlugins";
import dark from "./styles/themes/dark";
import Navbar from "./templates/Navbar";
import usePersistedState from "./hooks/usePersistedState";
import { DefaultTheme } from "styled-components/dist/types";
import Habilidades from "./templates/Habilidades";
import * as S from "./styles";

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>("theme", light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <GSAPPlugins />
          <Navbar toggleTheme={toggleTheme} />
          <Habilidades />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;

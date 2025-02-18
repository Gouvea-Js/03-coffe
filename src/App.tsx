import { ThemeProvider } from "styled-components";
import { BrowserRouter} from "react-router-dom";


import { GlobalStyle } from "./styles/Global";
import { defaultTheme } from "./styles/themes/default";
import { Router } from "./Router";
import { Header } from "./components/Header";
function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
      <Header />
          <Router />
      </BrowserRouter>
      
    </ThemeProvider>
  )
}
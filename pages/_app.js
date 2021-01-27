import { createGlobalStyle, ThemeProvider } from 'styled-components';
import db from '../db.json';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  #__next {
    display: flex;
    justify-content: center; 
    height: 100vh;
    width: 100vw;
  }
`

const theme = db.theme;

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

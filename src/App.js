import React from 'react';
import Content from './components/Content';
import useDarkMode from './styles/useDarkMode';
import Button from './components/Button'
import { GlobalStyles, darkTheme, lightTheme } from './styles/globalStyle'
import styled, { ThemeProvider } from 'styled-components';


const Container = styled.div`
max-widht:50%;
margin: 17em 25em ;
`;

function App() {
  const [theme, buttonTheme] = useDarkMode();
  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  return (
    <ThemeProvider theme={themeMode}>

      <Container>
        <GlobalStyles />
        <Button theme={theme} buttonTheme={buttonTheme} />
        <Content />
      </Container>

    </ThemeProvider>
  );
}

export default App;

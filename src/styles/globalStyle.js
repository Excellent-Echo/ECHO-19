import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
    position: relative;
  }
  p {
    line-height: 2rem;
  }

`;

export const lightTheme = {
  body: '#fff',
  text: '#121212',
  primary: '#6200ee',
};

export const darkTheme = {
  body: '#121212',
  text: '#ffffff',
  primary: '#bb86fc',
};
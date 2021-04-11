import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Roboto', sans-serif;
    transition: all .5s linear;
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
  text: '#0000ff',
  primary: '#bb86fc',
};
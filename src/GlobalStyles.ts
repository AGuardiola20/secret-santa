import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
  margin: 0;
  padding: 0;
  background-color: ${({ theme }) => theme.colors.background};
}
h1,
h2,
h3,
h4,
p {
  margin: 0;
  padding: 0;
  font-family: "Parkinsans", sans-serif;
  color: ${({ theme }) => theme.colors.text};
}
`;

export default GlobalStyle;

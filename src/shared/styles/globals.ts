import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
html,
body {
  padding: 0;
  margin: 0;
  font-family:'Segoe UI', 'Helvetica', Geneva, Verdana, sans-serif;
  height: 100%;
  @media (max-width: 1080px){
            font-size: 90%; //px fixa no valor
        }

        @media (max-width: 720px){
            font-size: 80.5%;
        }
}
button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
`;
export default Global;

import styled from 'styled-components';
import { transitionDelay } from '../constants/stylingVariables';
import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
    background-color: ${props => props.theme.bodyBackground};
    transition: background-color ${transitionDelay};
    margin: 0;
}`;
const GlobalAppWrapper = styled.div`
  * {
    font-family: 'Nunito Sans', sans-serif;
    color: ${props => props.theme.fontColor};
    transition: background-color ${transitionDelay}, color ${transitionDelay},
      box-shadow ${transitionDelay}, transform ${transitionDelay};
  }
`;

export { GlobalAppWrapper, GlobalStyles };

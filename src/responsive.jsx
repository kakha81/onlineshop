import { css } from "styled-components";

export const tablet = (props) => {
  return css`
    @media only screen and (min-width: 349px) and (max-width: 767px) {
      ${props}
    }
  `;
};

export const minScreen = (props) => {
  return css`
    @media only screen and (min-width: 768px) and (max-width: 990px) {
      ${props}
    }
  `;
};
export const midScreen = (props) => {
  return css`
    @media only screen and (min-width: 991px) and (max-width: 1198px) {
      ${props}
    }
  `;
};
export const maxScreen = (props) => {
  return css`
    @media only screen and (min-width: 1199px) {
      ${props}
    }
  `;
};

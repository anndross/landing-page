import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100%;
  display: grid;
  align-content: center;
  justify-items: center;
  gap: 40px;
  border-top: 1px solid ${props => props.theme.colors.primary300};
  border-bottom: 1px solid ${props => props.theme.colors.primary300};
`

export const Card = styled.div`
  background-color: ${props => props.theme.colors.primary300};
  min-height: 396px;
  border-radius: 20px;
  padding: 20px;
  box-shadow: 0 0 0.2rem ${props => props.theme.colors.primary500};
  & h2 {
    color: ${props => props.theme.colors.primary100};
    font-size: 1.4rem;
    font-weight: 100;
  };

  & h3 {
    color: ${props => props.theme.colors.primary100};
    font-size: 1.1rem;
    font-weight: 100;
  }

  & p {
    color:${props => props.theme.colors.primary200};
    font-size: 1rem; 
    letter-spacing: 1px; 
  }
  & div {
    display: flex;
    gap: 10px; 
    color: ${props => props.theme.colors.primary200} !important;
    font-size: 34px;
  }
`

export const MyServices = styled.div`
  display: grid;
  justify-content: center;
  margin: 40px 0;
  width: 100%;
  grid-template-columns: 22% 22% 22%;
  grid-template-areas: "a a a" "b c d";
  gap: 90px;
  & span {
    grid-area: a;
    font-size: 30px;
    color: ${props => props.theme.colors.primary100};
  }
  @media (max-width: 1510px) {
    grid-template-areas: "a a a" "b c ." "d . .";
    grid-template-columns: 33% 33%;
  }
  @media (max-width: 1060px) {
    grid-template-areas: "a a a" "b b b" "c c c" "d d d";
    justify-items: center;
    width: 70%;
  }

`

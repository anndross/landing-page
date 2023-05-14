import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url('/assets/rabitgraphic.png');
  background-size: 100vh;
  background-position-y: bottom;
  background-repeat: no-repeat;
`


export const Informations = styled.div`
    margin: 0 30px;

  & h1 {
    font-size: 3.5rem;
    color: ${props => props.theme.colors.primary100};
  };
  & p {
    font-size: 1rem;
    line-height: 25px;
    letter-spacing: 2px;
    color: ${props => props.theme.colors.primary200};
    margin: 30px 0;

    text-align: left;
    max-width: 600px
  }

  @media (max-width: 900px) {
    & h1 {
      font-size: 2.8rem;
    }
    & p {
      font-size: 0.8rem;
    }
  }
  @media (max-width: 412px) {
    & h1 {
      font-size: 2.4rem;
      text-align: center;
    }
    & p {
    text-align: center;
      font-size: 0.78rem;
    }
    display: flex;
    margin: 24px;
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
`

export const Images = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 540px;
  height: 720px;
  align-content: center;
  gap: 30px;
  margin-right: 60px;
  & img {
    width: 100%;
    filter: drop-shadow(0 0 0.4rem ${props => props.theme.colors.primary500}) ;
  }
  @media (max-width: 412px) {
   display: none;
  }
`
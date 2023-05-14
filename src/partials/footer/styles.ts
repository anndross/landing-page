import styled from "styled-components";

export const Container = styled.div`
  height: 280px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.primary300};
  flex-direction: column;
  gap: 10px;
  & span {
    color: ${props => props.theme.colors.primary100};
  }
`
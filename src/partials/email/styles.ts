import styled from 'styled-components'


export const Container = styled.div`
  min-height: 100vh;
  padding: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  & h1 {
    font-size: 1.7rem;
  }
  & h1, h2 {
    color: ${props => props.theme.colors.primary100};
    margin: 0;
  }
`

export const Template = styled.form`
  display: grid;
  gap: 24px;
  @media (min-width: 910px) {
    width: 45%;
  }
  & div:first-of-type {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 30px;
  }
  & label {
    color: ${props => props.theme.colors.primary100}
  }
`

export const InputBox = styled.div`
  display: grid;
  gap: 10px;
  width: 100%;
`


export const Description = styled.textarea`
  font-family: sans-serif;
  font-size: 14px;
  border-radius: 6px;
  outline: none;
  height: 150px;
  width: 100%;
  transition: border 0.6s;
  padding: 10px;
  border: 0;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.primary100};
  &:required:invalid {
    border: 1.4px solid ${props => props.theme.colors.danger};
  }
  letter-spacing: 1px;
  font-family: sans-serif;
  line-height: 20px;
  &:focus {
    border: 1.4px solid ${props => props.theme.colors.danger};
  }
  &::placeholder {
    letter-spacing: 1px;
    font-family: sans-serif;
    color: ${props => props.theme.colors.primary200};
    line-height: 20px;
  };
  background-color: ${props => props.theme.colors.primary300};
`

export const Input = styled.input`
  font-family: sans-serif;
  line-height: 20px;
  border-radius: 6px;
  outline: none;
  border: 0;
  height: 44px;
  width: 100%;
  color: ${props => props.theme.colors.primary100};
  background-color: ${props => props.theme.colors.primary300};
  font-size: 14px;
  padding: 0 10px;
  transition: border 0.6s;
  &:focus {
    border: 1.4px solid ${props => props.theme.colors.secondary100};
  };
  &:required:invalid {
    border: 1.4px solid ${props => props.theme.colors.danger};
  }
  &::placeholder {
    letter-spacing: 1px;
    font-family: sans-serif;
    color: ${props => props.theme.colors.primary200};
    line-height: 20px;
  };
`

export const ErrorMessage = styled.span`
  color: ${props => props.theme.colors.danger};
  font-weight: 100;
  font-size: 13px;
`
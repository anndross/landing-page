import styled, { css } from 'styled-components'

const blueLook = css`
  color: #fff;
  background: #16224b;
`

export const Container = styled.div`
  width: 100%;
  max-width: 100%;
  height: 63px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: 0.12s;
  background: #fff;
  color: #fff;
  ${props => props.color && blueLook}
  & div {
    margin: 0 30px;
    h1 {
      font-size: 1.8rem;
    }
  }
  background-color: #0e0d12;
`

export const LinkSections = styled.div`
  display: flex;
  gap: 30px;
  & a {
    text-decoration: none;
    font-size: 1.2rem;
    color: #16224b;
    ${props => props.color && blueLook}
    background: none !important;
  }
`
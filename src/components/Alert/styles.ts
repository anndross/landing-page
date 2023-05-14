import styled from 'styled-components'

export const Container = styled.div`
  position: fixed;
  top: 20px;
  right: -400px;
  z-index: 1000;
  width: 330px;
  height: 50px;
  border-radius: 6px;
  background-color: #b6f8c4;
  display: flex;
  transition: 1s;
  padding: 4px 10px;
  align-items: center;
  & div {
    display: grid;
    margin-left: 14px;
  }
  & div span:first-of-type {
    color: #000;
    font-size: 17px;
    font-weight: 600;
  };
  & div span {
    color: #000;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: 100;
  }
`
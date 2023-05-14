import styled from "styled-components";

export const Button = styled.button`
  width: 200px;
  padding: 10px;
  border-radius: 24px;
  font-size: 16px;
  outline: none;
  margin-top: 20px;
  color: #fff;
  border: none;
  cursor: pointer;
  background:#7640f5;
  transition: background 0.3s;
  &:hover {
    background: #1a2c66;
  };
  &:active {
    background: #5b80ff
  };
`
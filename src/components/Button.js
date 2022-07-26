import React from 'react'
import styled from "styled-components"

function Button() {
  return (
    <Container>Launch App</Container>
  )
}

export default Button

const Container = styled.div`
  height: 45px;
  width: 120px;
  display:flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: #505050;
  cursor: pointer;
`;
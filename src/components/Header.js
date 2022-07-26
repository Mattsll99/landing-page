import React from 'react'
import styled from "styled-components"
import Button from './Button';

function Header() {
  return (
    <Container>
      <Logo src="./assets/Logo.png"/>
      <Menu>
      <Text href='https://dusty-alibi-dbb.notion.site/SYLIUM-188c076736c44876bad9f92fd34632c1'>Litepaper</Text>
      <Text href='https://dusty-alibi-dbb.notion.site/Smart-Contracts-8f86b4da9b2e44258e0140f39685d18b'>Documentation</Text>
      </Menu>
      <a href='https://sylium.herokuapp.com/' style={{textDecoration: 'none', background: 'transparent'}}><Button /></a>
      </Container>
  )
}

export default Header

const Container = styled.div`
  position: sticky;
  top: 0px;
  width: 100vw;
  height: 100px;
  display:flex;
  flex-direction-row;
  align-items: center;
  justify-content: space-between;
  padding: 30px;
  background: rgba( 255, 255, 255, 0 );
  backdrop-filter: blur( 17px );
  -webkit-backdrop-filter: blur( 17px );
  @media(max-width:700px) {
    padding-left: 10px;
    padding-right: 10px;
  }
`;

const Logo = styled.img`
  height: 80px;
  width: 80px;
  background: transparent;
`;

const Menu = styled.div`
  display:flex;
  flex-direction:row;
  column-gap: 80px; 
  background: transparent;
  @media(max-width:700px) {
    column-gap: 10px;
  }
`;

const Text = styled.a`
  background: transparent;
  text-decoration: none;
  //cursor: pointer;
`;
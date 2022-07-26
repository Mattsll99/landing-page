import React from 'react'
import styled from "styled-components"

function FirstPage() {
  return (
    <Container>
      <Entrance>
        <h1 style={{fontSize:40}}>Bring Stability and Resilience to DeFi</h1>
        <h3 style={{fontSize:20, color:"#505050"}}>With the First Dynamically-Backed and Market-Driven Stablecoin</h3>
      </Entrance>
      <Description>
        <h1>1 SYLI = $1</h1>
      </Description>
      <Contact>
        <a href='	https://medium.com/@Matthias.Sylium'><Medium src="./assets/MediumLogo.png"/></a>
        <a href='https://github.com/Mattsll99/Sylium'><GitHub src="./assets/githubLogo.png"/></a>
      </Contact>
    </Container>
  )
}

export default FirstPage

const Container = styled.div`
  width:100%;
  height: 100vh;
  display:flex;
  flex-direction: column;
  //justify-content: space-between;
  align-items: center;
  padding: 30px;
  text-align:center;
  padding-top: 180px;
  
`;

const Entrance = styled.div`
  //margin-top: 50px;
`;

const Description = styled.div`
  margin-top: 80px;
`;

const Contact = styled.div`
  display:flex; 
  margin-top: 200px;
  column-gap: 30px;

`;

const Twitter = styled.img`
  height:30px;
  width:30px;
`;

const Medium = styled(Twitter)``;

const GitHub = styled(Twitter)``;
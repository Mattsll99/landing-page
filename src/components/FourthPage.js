import React from 'react'
import styled from "styled-components"

function FourthPage() {
  return (
    <div>
      <Bottom>
        <Slogan>
          <Logo src="./assets/Logo.png"/>
          <Mission>On a Mission to bring Stability, Resilience and Trust to DeFi</Mission>
        </Slogan>
        <Wrap>
        <About>
          <Title>About</Title>
          <Subtitle href='https://dusty-alibi-dbb.notion.site/SYLIUM-188c076736c44876bad9f92fd34632c1'>Litepaper</Subtitle>
          <Subtitle href='https://dusty-alibi-dbb.notion.site/Vision-29149b9a1d294f7cb9e29ac2e8bf7091'>Mission</Subtitle>
        </About>
        <Developers>
          <Title>Developers</Title>
          <Subtitle href='https://dusty-alibi-dbb.notion.site/Smart-Contracts-8f86b4da9b2e44258e0140f39685d18b'>Documentation</Subtitle>
          <Subtitle href='https://github.com/Mattsll99/Sylium'>Github</Subtitle>
        </Developers>
        <Community>
          <Title>Community</Title>
          <Subtitle href='	https://medium.com/@Matthias.Sylium'>Medium</Subtitle>
        </Community>
        </Wrap>
      </Bottom>
    </div>
  )
}

export default FourthPage

const Bottom = styled.div`
  height: auto;
  width: 100vw;
  display:flex;
  flex-direction:row;
  //align-items: center;
  justify-content: space-between;
  background: #505050;
  padding: 30px;
  @media (max-width:1300px) {
    flex-direction: column;
  }
`;

const Slogan = styled.div`
  display:flex;
  flex-direction:row;
  background: transparent;
`;

const About = styled.div`
  display:flex;
  flex-direction:column;
  background: transparent;
`;

const Developers = styled(About)``;

const Community = styled(About)``;

const Logo = styled.img`
  height: 120px;
  width: 120px;
  background: #505050;
`;

const Title = styled.text`
  background: #505050;
  margin-bottom: 10px;
  
`

const Mission = styled.text`
  margin-left:40px;
  margin-top: 30px;
  text-align: start;
  background: transparent;
  width: auto;
  font-size: 20px;
`;

const Wrap = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  width:50%;
  background-color: transparent;
  padding: 30px;
  @media(max-width:1300px) {
    width:100%;
    
  }
`;

const Subtitle = styled.a`
  background:Transparent;
  color: #999999;
  text-decoration: none;
`;
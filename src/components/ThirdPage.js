import React from 'react'
import styled from "styled-components"

function ThirdPage() {
  return (
    <Container>
      <Explanations>
        <Title>Turn the Market Volatility into an Opportunity</Title>
        <h3 style={{marginTop: 20, marginBottom:10, fontSize:20, color:'#505050'}}>Introducing the Proof of Resilience (P.O.R.)</h3>
        <p>The P.O.R. ensures that the protocol can always buy 
          back all the minted SYLI, with only ETH and USDC, no 
          matter how the market behaves. To do so, when the protocol
          needs to increase its ETH and USDC reserves, it lets 
          investors mint SYLI with these collaterals while enjoying
          a preferential rate. <a style={{color:'#0074FD', textDecoration: 'none'}} href='https://dusty-alibi-dbb.notion.site/Proof-of-Resilience-c28be47d46964b6f80816c620f928f2f'>[Learn more]</a>
        </p>
      </Explanations>
      <Wrap>
      <Chart src="./assets/chart-POR.png"/>
      </Wrap>
    </Container>
  )
}

export default ThirdPage

const Container = styled.div`
  //height: 100vh;
  width: 100vw;
  padding: 30px;
  display:flex;
  justify-content: space-between;
  @media (max-width:700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Explanations = styled.div`
  width: 50%;
  @media (max-width:700px) {
    width: 100%;
  }
`;

const Wrap = styled.div`
  width:50%;
  @media (max-width:700px) {
    width: 100%;
  }
`;

const Chart = styled.img`
  max-width: 100%;
  height: auto;
`;

const Title = styled.text`
  font-size:30px;
  padding-bottom:20px;
`;
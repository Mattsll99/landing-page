import React from 'react'
import styled from "styled-components"

function SecondPage() {
  return (
    <Container>
      <Wrap>
      <Chart src="./assets/chart_stabi.png"/>
      </Wrap>
      <Explanation>
      <Title>The first market-driven stablecoin</Title>
      <Subtitle>Introducing the Stabilization Equation</Subtitle>
      <Text>Protocol reserves, assets volatility, market
         capitalizations are evaluated at each moment
          by the stabilization equation of the protocol,
           which dynamically governs the amount of 
           ETH, USDC and SYLIX needed to mint and 
           redeem one SYLI. This leads to the most
            stable coin on the market.  <a style={{textDecoration:"none", color: "#54A365"}}href='https://dusty-alibi-dbb.notion.site/Stabilization-Equation-bba7cc6df2a8470fa2abfa182a042026'>[Learn more]</a></Text>
      </Explanation>
    </Container>
  )
}

export default SecondPage

const Container = styled.div`
  height:80vh;
  width:100vw;
  display:flex;
  flex-direction:row;
  padding: 30px;
`;

const Chart = styled.img`
  max-width:100%;
  height: auto;
`;

const Explanation = styled.div`
  width: 50%;
  display:flex;
  align-items: start;
  flex-direction: column
`;

const Wrap = styled.div`
  width: 50%;
`;

const Title = styled.text`
  font-size: 30px;
  padding-bottom: 20px;
`;

const Subtitle = styled.text`
  font-size: 20px;
  padding-bottom: 10px;
  color: #505050;
`;

const Text = styled.text``;
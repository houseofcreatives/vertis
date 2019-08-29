import React from "react"
import styled from "styled-components"

import { device } from "./../devices"

const Container = styled.div`
  display: flex;
  width: 100%;
  padding 5rem 0;

  @media ${device.md} {
    height: 700px;
  }
`

const SectionHeading = styled.h3`
  width: 70%;
  font-size: 32px !important;
`

const FirstP = styled.p`
  color: #969eac;
  width: 90%;
`

const SecondP = styled.p`
  color: #969eac;
  width: 90%;
`

const Stripes = styled.div`
  position: absolute;
  width: 100%;
  height: 700px;

  & :first-child {
    right: 0;
    top: 80px;
    height: calc(var(--default-stripe-height) - 20px);
  }

  & :nth-child(2) {
    left: 0;
    bottom: 150px;
    height: calc(var(--default-stripe-height) - 20px);
    width: calc(var(--default-stripe-width) - 75px);
  }

  & :last-child {
    left: 0;
    bottom: 50px;
    height: calc(var(--default-stripe-height));
    width: calc(var(--default-stripe-width) - 180px);
  }
`

const Stripe = styled.div`
  display: inline-block;

  width: 450px;
  position: absolute;
  background-color: rgba(214, 214, 214, 0.2);
  transform: skewY(-8deg);
`

const InnerContainer = styled.div`
  position: relative;
  display: flex;
  width: 70%;
  text-align: center;
  flex-direction: column;
  align-items: center;
  align-self: center;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

export const CompanyInformation = () => {
  return (
    <Container>
      <Stripes>
        <Stripe />
        <Stripe />
        <Stripe />
      </Stripes>
      <InnerContainer>
        <SectionHeading>
          VERTIS Technology Solutions Limited is a people focused company that
          brings great people together to enable your best.
        </SectionHeading>
        <FirstP>
          We’re a diverse group of doers, continuously reimagining our services
          to help people do what they love in new ways. That innovation is
          inspired by a shared commitment to great work — and to each other.
          Because learning from the people at Vertis Technology means we’re
          learning from the best. We believe technology can and should be a
          force for that enables the very best in people and that meaningful
          innovation will contribute to greatness.
        </FirstP>
        <SecondP>
          Every service we offer is the result of people working together to
          make each other’s ideas stronger. That happens here because every one
          of us strives toward a common goal — creating the best customer
          experiences. Multiply that effort across every service in every Vertis
          Technology offering and you’ll get an idea of how important
          collaboration is here.
        </SecondP>
      </InnerContainer>
    </Container>
  )
}

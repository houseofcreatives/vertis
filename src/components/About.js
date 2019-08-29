import React, { Component } from "react"

import { device } from "./../devices"
import styled from "styled-components"

const Container = styled.section`
  height: calc(160px * 6);
  display: flex;
  margin-bottom: 120px;

  @media ${device.md} {
    height: calc(160px * 4);
  }
`

const Stripes = styled.div`
  position: absolute;
  width: 100%;
  height: calc(160px * 6);
  background-image: linear-gradient(to bottom left, #83e9af, #1e97d3);
  transform: skewY(-8deg);

  @media ${device.md} {
    height: calc(160px * 4);
  }

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
`

const InnerContainer = styled.div`
  position: absolute;
  align-self: center;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const SectionHeading = styled.h3`
  text-align: center;
`

const P = styled.p`
  text-align: center;
  width: 80%;
  color: #ffffff;
  opacity: 0.9;
`

export class About extends Component {
  render() {
    return (
      <Container>
        <Stripes>
          <Stripe />
          <Stripe />
          <Stripe />
        </Stripes>
        <InnerContainer>
          <SectionHeading>
            Investing in the future of IT solutions
          </SectionHeading>

          <P>
            We stay at the forefront of technology trends. To ensure our clients
            have access to a wide range of technologies and best-of-breed
            solutions, we partner with over 50 technology providers including
            market leaders and emerging to bring our clients integrated and
            multi technology solutions.
          </P>
          <P>
            Through our team members with the highest IT certifications in their
            respective fields and collectively over 100 years implementing and
            supporting solutions we are the preferred provider of innovation and
            transformation. We are trusted advisors to our clients on a national
            level while also bringing our international scale and expertise to
            bear. True success comes from working with a partner you trust to
            provide innovation , support and knowledge that will take your
            business forward.
          </P>
          <P>
            Vertis Technology Solutions Limited gives you results and
            partnership. When you choose us, your continued success is our
            mandate. We offer you the ability to achieve your objectives and
            capitalize on every opportunities presented to you.
          </P>
        </InnerContainer>
      </Container>
    )
  }
}

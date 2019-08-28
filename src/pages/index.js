import React from "react"
import Layout from "../components/layout"
import css from "styled-components"

import { SecondaryButton } from "./../components/buttons"
import { device } from "../devices"
import { PartnerSlider } from "./../components/partnerSlider"
import { OurServices } from "./../components/OurServices"
import { About } from "../components/About"
import { CompanyInformation } from "./../components/CompanyInformation"
import { OurTeam } from "./../components/OurTeam"
import { Testimonials } from "./../components/Testimonials"
import { ContactUs } from "./../components/ContactUs"

// Images
import LaptopImg from "./../images/laptop-image.png"

const StripesContainer = css.div`
  position: absolute;
  height: 450px;
  width: 100%;
  background-image: linear-gradient(to bottom left, #83e9af, #1e97d3);
  transform: skewY(-8deg);
  transform-origin: 0;

  @media ${device.lg} {
    height: 640px;
  }
`

const Jumbotron = css.div`
`

const Stripe = css.div`
  display: inline-block;
  height: 125px;
  position: absolute;
`

const Illustration = css.img`
  display: none;
  transform: skewY(8deg);
  height: 300px;
  position: absolute;
  right: 0;
  bottom: -10px;

  @media ${device.lg} {
    display: block;
  }
`

const Intro = css.section`
  position: relative;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 0 1.2rem;

  @media ${device.lg} {
    height: 640px;
    align-items: flex-start;
    text-align: start;
    width: 700px;
  }
`

const JumbotronBtn = css(SecondaryButton)`
  width: fit-content;
`

const MainText = css.span`
  font-size: 2rem;
  font-weight: 600;
  line-height: 30px;
  color: #fff;
  margin-bottom: 25px;
  text-transform: uppercase;
`

const SecondayText = css.p`
  color: rgba(255,255,255,0.7);
`

const IndexPage = () => (
  <Layout>
    <Jumbotron>
      <StripesContainer>
        <Stripe />
        <Stripe />
        <Stripe />
        <Stripe />

        <Illustration src={LaptopImg} />
      </StripesContainer>

      <Intro>
        <MainText>Vertis is a customer centered company</MainText>
        <SecondayText>
          We offer a wide range of solutions and services. Our team do
          remarkable hings to enable businesses, government and communities to
          achieve their best and address their toughest challenges.
        </SecondayText>
        <JumbotronBtn>Explore More</JumbotronBtn>
      </Intro>
    </Jumbotron>
    <PartnerSlider />
    <OurServices />
    <CompanyInformation />
    <About />
  </Layout>
)

export default IndexPage

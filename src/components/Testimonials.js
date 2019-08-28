import React from "react"

import styled from "styled-components"
import TinySlider from "tiny-slider-react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons"

const settings = {
  lazyload: false,
  nav: false,
  mouseDrag: false,
  autoHeight: true,
}

const TestimonialsSection = styled.section`
  margin-top: 10rem;
  margin-bottom: 10rem;
`

const Stripes = styled.div`
  position: absolute;
  width: 100%;
  height: calc(160px * 5);
  background-image: linear-gradient(to bottom left, #83e9af, #1e97d3);
  transform: skewY(-8deg);

  & :first-child {
    left: 0;
    top: 30%;
    width: var(--default-stripe-width + 200px);
    height: var(--default-stripe-height + 130px);
  }

  & :nth-child(2) {
    top: 20%;
  }

  & :nth-child(3) {
    right: 0;
    top: 70%;
  }
`

const Stripe = styled.div`
  display: inline-block;
  height: 125px;
  width: 450px;
  position: absolute;

  background-color: rgba(217, 217, 217, 0.1);
`

const TestimonialsContainer = styled.div`
  position: relative;
  height: calc(160px * 5);
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const SectionHeader = styled.h3`
  color: #fff;
  text-align: center;
`

const SectionSubheader = styled.p`
  color: #fff;
  text-align: center;
  opacity: 0.7;
  width: 40%;
  font-size: 18px;
  margin: 0 auto;
  margin-bottom: 20px;
`

const SliderItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const ClientPhoto = styled.img`
  width: 200px;
  border-radius: 300px;
`

const ClientName = styled.span`
  color: white;
  font-weight: 600;
  font-size: 18px;
  display: block;
  text-align: center;
  margin-top: 15px;
`

const ClientDetails = styled.span`
  display: block;
  text-align: center;
  margin-top: 10px;
  font-size: 14px;
  opacity: 0.7;
  color: white;
`

const clients = [
  {
    name: "Leon W.",
    title: "CEO, Techbred",
    message:
      "Vertis solved our network security needs with implementation of a Unified Threat Management device that improve our security exponentially. Vertis attention to detail is quite refreshing.",
  },
  {
    name: "Saralee P.",
    title: "CEO, DevWright",
    message:
      "Test lol. This is a test thing for other thing dwith the things on eht ethings. Fix this up or else 56384.",
  },
]

export const Testimonials = () => {
  return (
    <TestimonialsSection>
      <Stripes>
        <Stripe />
        <Stripe />
        <Stripe />
      </Stripes>

      <TestimonialsContainer>
        <SectionHeader>What Our Clients Are Saying</SectionHeader>

        <TinySlider settings={settings} cl>
          {clients.map((el, index) => (
            <div key={index} style={{ position: "relative" }}>
              <SliderItem>
                <SectionSubheader class="mx-auto text-center text-white">
                  "{el.message}"
                </SectionSubheader>
                <ClientPhoto
                  src="https://via.placeholder.com/200"
                  alt="Client"
                />
                <ClientName>{el.name}</ClientName>
                <ClientDetails>{el.title}</ClientDetails>
              </SliderItem>
            </div>
          ))}
        </TinySlider>
      </TestimonialsContainer>
    </TestimonialsSection>
  )
}

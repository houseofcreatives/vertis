import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"

const FooterContainer = styled.div`
  overflow: hidden;
  height: calc(190px * 2.5);

  position: relative;
  background-image: linear-gradient(to bottom left, #83e9af, #1e97d3);
  height: calc(190px * 2.5);

  clip-path: polygon(0 45%, 100% 0, 100% 100%, 0% 100%);

  display: flex;
  justify-content: center;
`

const Logo = styled.img`
  height: 50px;
  margin-right: 100px;
`

const Stripes = styled.div``

const Stripe = styled.div``

const FooterContent = styled.div`
  display: inline-block;
  justify-self: center;
  text-align: center;
  align-self: flex-end;
  margin-bottom: 50px;
  color: white;
`

const FooterNav = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  &-links {
    list-style: none;
  }
`

const FooterNavLinks = styled.div``

const FooterLink = styled.span`
  font-size: 18px;
  &:not(:last-child) {
    margin-right: 15px;
  }
`

const SocialIcons = styled.div`
  margin-bottom: 20px;
`

const SocialIcon = styled(FontAwesomeIcon)`
  display: inline-block;
  background-color: #78dadd;
  height: 40px;
  width: 40px;
  padding: 10px;
  border-radius: 500px;
  font-size: 1rem;

  &:not(:last-child) {
    margin-right: 10px;
  }
`

const Copyright = styled.span`
  font-size: 12px;
`

export const Footer = () => {
  return (
    <footer>
      <FooterContainer>
        <Stripes>
          <Stripe />
          <Stripe />
          <Stripe />
          <Stripe />
        </Stripes>

        <FooterContent>
          <FooterNav>
            <Logo
              src={require("./../images/logo-white.png")}
              alt="Vertis Logo"
            />

            <FooterNavLinks>
              <FooterLink>Our Services</FooterLink>
              <FooterLink>About Us</FooterLink>
              <FooterLink>Blog</FooterLink>
              <FooterLink>Jobs</FooterLink>
              <FooterLink>Contact Us</FooterLink>
            </FooterNavLinks>
          </FooterNav>
          <SocialIcons>
            <FontAwesomeIcon
              icon={faFacebook}
              className="social-icon"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faLinkedin}
              className="social-icon"
              size="2x"
            />
            <FontAwesomeIcon
              icon={faInstagram}
              className="social-icon"
              size="2x"
            />
          </SocialIcons>
          <Copyright>
            Vertis Technology. All rights reserved. Read our Tems of service |
            Privacy
          </Copyright>
        </FooterContent>
      </FooterContainer>
    </footer>
  )
}

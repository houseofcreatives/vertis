import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import { PrimaryButton } from "./buttons"

import Logo from "./../images/logo.png"
import css from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

import { device } from "../devices"

const Nav = css.nav`
  position: sticky;
  top: 0;
  z-index: var(--zindex-sticky);
  width: 100%;
  background-color: #f8f9fa;
  padding: 10px 30px 10px 30px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;

  @media ${device.lg} {
    grid-template-columns: auto auto;
  }
`

const NavBranding = css.div`
  display: flex;
  justify-content: center;

  @media ${device.lg} {
    justify-content: flex-start;
  }
`

const Navigation = css.div`
  display: none;
  align-items: center;
  justify-content: flex-end;

  @media ${device.lg} {
    display: flex;
  }
`

const NavigationLinks = css.div`
  a {
    text-decoration: none;
    display: inline-block;
    transition: all .3s;
    color: #249cd6;

    &:hover {
      transform: scale(1.15);
    }

    &:not(:last-child) {
      margin-right: 35px;
    }
  }
`

const NavigationItem = css.span`
  color: #249cd6;
  font-weight: 600;
`

const NavLogo = css.img`
  height: 50px;
  margin: 0;
`

const Header = ({ siteTitle }) => (
  <Nav>
    <NavBranding>
      <NavLogo src={Logo} />
    </NavBranding>
    <Navigation>
      <NavigationLinks>
        <Link to="/#services">
          <NavigationItem>Our Services</NavigationItem>
        </Link>
        <Link to="/#about">
          <NavigationItem>About Us</NavigationItem>
        </Link>
        <a href="http://ec2-3-83-164-68.compute-1.amazonaws.com/">
          <NavigationItem>Blog</NavigationItem>
        </a>
        <Link to="/jobs">
          <NavigationItem>Jobs</NavigationItem>
        </Link>
        <Link to="/#contact">
          <NavigationItem>Contact Us</NavigationItem>
        </Link>
        <Link to="/search">
          <FontAwesomeIcon icon={faSearch} />
        </Link>
        <PrimaryButton>Login</PrimaryButton>
      </NavigationLinks>
    </Navigation>
  </Nav>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

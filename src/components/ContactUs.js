import React from "react"
import styled from "styled-components"
import { Container } from "./bootstrap"
import { device } from "./../devices"
import GoogleMapReact from "google-map-react"

const ContactFormContainer = styled(Container)`
  position: relative;
  bottom: -180px;
  z-index: 1000;
  box-shadow: 0 12px 210px 0 rgba(163, 164, 164, 0.2);
  border-radius: 20px;
  overflow: hidden;
  background-color: white;
  margin: 0 auto;

  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  padding-right: 0;
  padding-left: 0;

  @media ${device.md} {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;
  }
`

const FormContainer = styled.div`
  padding-top: 30px;
  padding-left: 20px;
  padding-right: 20px;
`

const FormHeading = styled.h3`
  text-align: center;
`

const FormSubheading = styled.span`
  display: block;
  text-align: center;
  letter-spacing: 3px;
  font-size: 18px;
  color: #969eac;
`

const ContactForm = styled.form`
  margin-top: 30px;
`

const ContactFormSubheading = styled.span`
  display: block;
  font-weight: 600;
  opacity: 0.6;
  font-size: 22px;
  margin-bottom: 20px;
`

const Row1 = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: 48.5% 48.5%;
  grid-column-gap: 3%;
`

const Row2 = styled.div`
  margin-top: 20px;
`

const Row3 = styled.div`
  margin-top: 20px;
`

const DefaultInput = styled.input`
  border: 1px solid #e3e3e3;
  border-radius: 5px;
  height: 40px;
  min-width: 100%;
`

const DefaultTextarea = styled.textarea`
  border: 1px solid #e3e3e3;

  border-radius: 5px;
  width: 100%;
`

const MapContainer = styled.div`
  height: 300px;

  @media ${device.md} {
    height: 100%;
  }
`

export const ContactUs = () => {
  return (
    <ContactFormContainer id="contact">
      <FormContainer>
        <FormHeading>Contact Us</FormHeading>
        <FormSubheading>We're here to make it easier</FormSubheading>
        <ContactForm>
          <ContactFormSubheading>Submit a request</ContactFormSubheading>
          <Row1>
            <div>
              <DefaultInput placeholder="Name" />
            </div>
            <div>
              <DefaultInput placeholder="Email" />
            </div>
          </Row1>
          <Row2>
            <DefaultInput placeholder="Organization" />
          </Row2>
          <Row3>
            <DefaultTextarea placeholder="Message" rows="10" />
          </Row3>
        </ContactForm>
      </FormContainer>
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBbyxQgI9ehZ4WZrK3V8NvkFYAq7HuBws4" }}
          defaultCenter={{
            lng: -76.7771381,
            lat: 18.0065871,
          }}
          defaultZoom={17}
        ></GoogleMapReact>
      </MapContainer>
    </ContactFormContainer>
  )
}

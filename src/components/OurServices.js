import React, { Component } from "react"
import styled from "styled-components"

import { device } from "./../devices"
import { SecondaryButtonOutline, SecondaryButton } from "./buttons"

const Container = styled.div`
  margin-top: 100px;
  text-align: center;
`

const ServiceButtons = styled.div`
  padding: 0 15%;
`

const ServiceContainer = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto auto;
  margin-top: 50px;

  @media ${device.md} {
    grid-template-columns: 50% 50%;
  }
`

const IllustrationContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 10px;

  @media ${device.md} {
    padding-right: 30px;
    justify-content: flex-end;
  }
`

const Illustration = styled.img`
  border-radius: 500px;
  max-height 255px;

  @media ${device.md} {
    max-height: unset;
  }
`

const ServiceTitle = styled.h4`
  color: #219ad2;
  font-size: 1.5rem;
  text-align: center;
`
const ServiceInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 30px;

  @media ${device.md} {
    text-align: start;
    justify-content: center;
    align-items: flex-start;
  }
`

const ServiceDescription = styled.p`
  @media ${device.lg} {
    width: 500px;
  }
`

const settings = {
  lazyload: false,
  nav: false,
  mouseDrag: false,
  items: 1,
  autoHeight: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  controls: false,
}

export class OurServices extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeService: 1,
      TinySlider: null,
    }
    this.ts = React.createRef()
  }

  componentDidMount() {
    import("tiny-slider-react").then(TinySlider => {
      this.setState({ TinySlider: TinySlider.default })
    })
  }

  onGoTo = dir => this.ts.slider.goTo(dir)

  render() {
    let { TinySlider } = this.state
    const services = [
      {
        id: 1,
        name: "Application Development",
        illustration: require("./../images/appdev.svg"),
        description:
          "Classical or modern approaches like Agile, we guarantee a timely delivery of the project within your budget and to your specifications.",
      },
      {
        id: 2,
        name: "Cyber Security",
        illustration: require("./../images/security.svg"),
        description:
          "The best response to threats is a comprehensive information security strategy, both inside and outside your organization.",
      },
      {
        id: 3,
        name: "IT Staffing",
        illustration: require("./../images/staffing.svg"),
        description:
          "Classical or modern approaches like Agile, we guarantee a timely delivery of the project within your budget and to your specifications.",
      },
      {
        id: 4,
        name: "Managed Services",
        illustration: require("./../images/managedservices.svg"),
        description:
          "Vertis Managed Services address all of your day-to-day IT management needs so your internal IT staff can focus on strategic initiatives.",
      },
      {
        id: 5,
        name: "Cloud Services",
        illustration: require("./../images/cloudservices.svg"),
        description:
          "Classical or modern approaches like Agile, we guarantee a timely delivery of the project within your budget and to your specifications.",
      },
    ]

    const renderSlider = props => {
      if (!TinySlider) {
        return <div>Loading...</div>
      } else {
        return (
          <TinySlider
            settings={settings}
            ref={ts => (this.ts = ts)}
            onIndexChanged={e => this.setState({ activeService: e.index })}
          >
            {services.map((el, index) => (
              <div key={index}>
                <ServiceContainer>
                  <IllustrationContainer>
                    <Illustration src={el.illustration} />
                  </IllustrationContainer>
                  <ServiceInfoContainer>
                    <ServiceTitle>{el.name}</ServiceTitle>
                    <ServiceDescription>{el.description}</ServiceDescription>
                    <SecondaryButton
                      style={{
                        padding: "1rem 4rem",
                        height: "auto",
                      }}
                    >
                      Learn More
                    </SecondaryButton>
                  </ServiceInfoContainer>
                </ServiceContainer>
              </div>
            ))}
          </TinySlider>
        )
      }
    }

    return (
      <Container>
        <h3 id="services">Our Services</h3>
        <ServiceButtons>
          {services.map((value, index) => {
            return (
              <SecondaryButtonOutline
                as={"button"}
                type="button"
                key={value.id}
                onClick={() => this.onGoTo(index)}
                className={
                  this.state.activeService === value.id
                    ? "active-sec-outline"
                    : null
                }
                style={{
                  margin: "10px 5px",
                }}
              >
                {value.name}
              </SecondaryButtonOutline>
            )
          })}
        </ServiceButtons>
        {renderSlider()}
      </Container>
    )
  }
}

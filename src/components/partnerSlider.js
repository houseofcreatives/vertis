import React, { Component } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons"

import styled from "styled-components"

const SliderContainer = styled.div`
  display: grid;
  grid-template-columns: 10% auto 10%;
  grid-template-rows: auto;
`

const SliderItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

const SliderControl = styled(FontAwesomeIcon)`
  color: #0cad98af;
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.5);
  }
`

const ControlContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const settings = {
  lazyload: false,
  nav: false,
  mouseDrag: false,
  items: 1,
  autoplay: true,
  autoplayButton: false,
  autoplayButtonOutput: false,
  controls: false,
  responsive: {
    768: {
      items: 2,
    },
    992: {
      items: 4,
    },
  },
}

export class PartnerSlider extends Component {
  constructor(props) {
    super(props)
    this.state = {
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

    const renderSlider = props => {
      if (!TinySlider) {
        return <div>Loading...</div>
      } else {
        return (
          <TinySlider settings={settings} ref={ts => (this.ts = ts)}>
            {partners.map((el, index) => (
              <div key={index} style={{ position: "relative" }}>
                <SliderItem>
                  <a
                    href={el.website}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      className={`tns-lazy-img`}
                      src={el.imgURL}
                      alt={el.alt}
                    />
                  </a>
                </SliderItem>
              </div>
            ))}
          </TinySlider>
        )
      }
    }

    const partners = [
      {
        imgURL: require("./../images/vmware-logo.png"),
        website: "https://www.vmware.com/",
        alt: "VMWare Logo",
      },
      {
        imgURL: require("./../images/delltech-logo.png"),
        website: "https://www.dellemc.com",
        alt: "Dell Logo",
      },
      {
        imgURL: require("./../images/veeam-logo.png"),
        website: "https://www.veeam.com/",
        alt: "Veeam Logo",
      },
      {
        imgURL: require("./../images/cisco-logo.png"),
        website: "https://www.cisco.com/",
        alt: "Cisco Logo",
      },
      {
        imgURL: require("./../images/sophos-logo.png"),
        website: "https://www.sophos.com/en-us.aspx",
        alt: "Sophos Logo",
      },
      {
        imgURL: require("./../images/rubrick-logo.png"),
        website: "https://www.rubrik.com/",
        alt: "Rubrik Logo",
      },
      {
        imgURL: require("./../images/storone-logo.png"),
        website: "https://www.storone.com/",
        alt: "Storone Logo",
      },
      {
        imgURL: require("./../images/microsoft-logo.png"),
        alt: "Microsoft Logo",
        website: "https://www.microsoft.com/en-us/",
      },
      {
        imgURL: require("./../images/carbon-black.png"),
        alt: "Carbon Black Logo",
        website: "https://www.carbonblack.com/",
      },
      {
        imgURL: require("./../images/fortinet-logo.png"),
        alt: "Fortinet Logo",
        website: "https://www.fortinet.com/",
      },
      {
        imgURL: require("./../images/hewlettpackard-logo.png"),
        alt: "HPE Logo",
        website: "https://www.hpe.com/emea_europe/en/home.html",
      },
      {
        imgURL: require("./../images/grandstream-logo.png"),
        alt: "Grandstream Logo",
        website: "https://www.grandstream.com/",
      },
      {
        imgURL: require("./../images/trendmicro-logo.png"),
        alt: "Trend Micro Logo",
        website: "https://www.trendmicro.com/en_us/business.html",
      },
      {
        imgURL: require("./../images/crowdstrike-logo.png"),
        alt: "Crowdstrike Logo",
        website: "https://www.crowdstrike.com/",
      },
    ]
    return (
      <SliderContainer>
        <ControlContainer>
          <SliderControl
            onClick={() => this.onGoTo("prev")}
            icon={faChevronLeft}
          ></SliderControl>
        </ControlContainer>
        <div>{renderSlider()}</div>
        <ControlContainer>
          <SliderControl
            onClick={() => this.onGoTo("next")}
            icon={faChevronRight}
          ></SliderControl>
        </ControlContainer>
      </SliderContainer>
    )
  }
}

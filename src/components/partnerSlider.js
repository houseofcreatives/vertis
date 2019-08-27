import React, { Component } from "react"

import TinySlider from "tiny-slider-react"

const settings = {
  lazyload: false,
  nav: false,
  mouseDrag: false,
  items: 1,
  autoplay: true,
  autoplayButton: false,
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
  render() {
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
      <div>
        <TinySlider settings={settings} ref={ts => (this.ts = ts)}>
          {partners.map((el, index) => (
            <div key={index} style={{ position: "relative" }}>
              <a href={el.website} target="_blank" rel="noopener noreferrer">
                <img className={`tns-lazy-img`} src={el.imgURL} alt={el.alt} />
              </a>
            </div>
          ))}
        </TinySlider>
        <button type="button" onClick={() => this.ts.slider.onGoTo("next")}>
          Next
        </button>
      </div>
    )
  }
}

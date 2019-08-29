import React from "react"
import styled from "styled-components"

import { Container } from "./bootstrap"

const OurTeamSection = styled.section`
  padding-bottom: 2rem;
`

const SectionContainer = styled(Container)``

const SectionHeading = styled.h3`
  text-align: center;
`
const TeamPhoto = styled.img`
  max-height: 400px;
  border-radius: 50px;
  display: block;
  margin: 20px auto;
`

const IntroText = styled.p`
  margin: 1rem 0;
  text-align: center;
`

const ExecTeamHeading = styled.h3`
  margin-top: 1rem;
  padding-top: 0.75rem;
`

const Executive = styled.div`
  display: grid;
  grid-template-columns: 30% auto;
  grid-template-rows: auto;
`

const ExecutivePhoto = styled.img`
  border-radius: 500px;
  width: 100%;
`

const ExecutiveName = styled.span`
  color: #091e40;
  text-transform: uppercase;
  font-size: 26px;
  font-weight: 600;
  display: block;
  margin-top: 1rem;
  text-align: center;
`

const ExecutiveTitle = styled.span`
  color: #091e40;
  font-size: 22px;
  display: inline-block;
  text-align: center;
`

const ExecutiveBio = styled.div`
  padding-left: 50px;
`

export const OurTeam = () => {
  return (
    <OurTeamSection id="about">
      <SectionContainer>
        <SectionHeading>Our Team</SectionHeading>
        <TeamPhoto
          src={require("./../images/teamwork.svg")}
          alt="Jumbo Team Image"
        />
        <IntroText>
          With over 100 years combined experience in the IT field implementing,
          supporting IT solutions and services from medium to large enterprises,
          we pride ourselves in delivering value service. Our customers are dear
          to us and we ensure that we know their mission and give solutions that
          achieve the mission well. Our commitment to our customers defines how
          we do business and our years of experience working across industries
          underpin the vast array of services we offer.
        </IntroText>

        <ExecTeamHeading style={{ marginTop: "3rem" }}>
          The Executive Team
        </ExecTeamHeading>

        <Executive>
          <div>
            <div>
              <span></span>
              <ExecutivePhoto
                src={require("./../images/executive-photos/rsterling.png")}
                alt="executive-photo"
              />
            </div>

            <ExecutiveName>Ryan M. Sterling</ExecutiveName>
            <ExecutiveTitle>
              Co-founder, CEO &amp; Head of Business Development
            </ExecutiveTitle>
          </div>
          <ExecutiveBio>
            <p>
              Ryan Sterling is the CEO of Vertis Technology and serves on its
              Board of Directors . Ryan is responsible for all of the company’s
              worldwide sales and operations, including end-to-end management of
              Vertis’ sales activities along with service and support in all
              markets and countries.
            </p>
            <p>
              He also headed Vertis’ Operations Department and played a key role
              in the continued development of strategic re-seller and supplier
              relationships, ensuring flexibility in response to an increasingly
              demanding marketplace.
            </p>
            <p>
              Ryan has over 7 years in Sales and the IT industry. He has earned
              a Bachelor of Science degree in Sociology from The University of
              The West Indies and numerous Sales and IT certifications.
            </p>
          </ExecutiveBio>
        </Executive>

        <Executive style={{ marginTop: "3rem" }}>
          <div>
            <div>
              <span></span>
              <ExecutivePhoto
                src={require("./../images/executive-photos/csterling.png")}
                alt="executive-photo"
              />
            </div>
            <ExecutiveName>Cameille S. Sterling</ExecutiveName>
            <ExecutiveTitle>
              Chief Operations Officer &amp; Head of Marketing
            </ExecutiveTitle>
          </div>
          <ExecutiveBio>
            <p>
              Cameille is a member of Vertis’ Executive Team and serves on the
              Board of Directors. As head of the Operations and Marketing,
              Cameille leads a talented and creative team focused on Vertis’
              advertising, internet presence and other consumer-facing
              marketing.
            </p>
            <p>
              Cameille focuses on Vertis’ critical capabilities, connecting
              internal functions under a calibrated Operations team, which
              scales an operational model that is necessary to support Vertis’
              growth.
            </p>
            <p>
              Cameille has over 10 years of Marketing and Management experience
              with a Bachelor of Science degree in Marketing and Financial
              Services.
            </p>
          </ExecutiveBio>
        </Executive>

        <Executive style={{ marginTop: "3rem" }}>
          <div>
            <div>
              <span></span>
              <ExecutivePhoto
                src={require("./../images/executive-photos/mkerr.png")}
                alt="executive-photo"
              />
            </div>
            <ExecutiveName>Michael G. Kerr</ExecutiveName>
            <ExecutiveTitle>
              Chief Technology Officer &amp; Head of Service Delivery
            </ExecutiveTitle>
          </div>
          <ExecutiveBio>
            <p>
              Michael is a business leader with significant business
              transformation and technology enablement experience, driving
              growth and productivity improvements in both large and mid-sized
              enterprises.
            </p>
            <p>
              He has a strong record of success in creating robust IT and
              Engineering organizations. Michael has a proven ability in
              adapting/maturing technology organizations to solve business
              issues while managing costs and risks. He leads Vertis’ Service
              and Solutions Teams.
            </p>
          </ExecutiveBio>
        </Executive>
      </SectionContainer>
    </OurTeamSection>
  )
}

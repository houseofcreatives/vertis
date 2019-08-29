import React from "react"
import styled from "styled-components"

import { device } from "./../devices"
import Layout from "../components/layout"
import { Container } from "../components/bootstrap"

const JobsPageContainer = styled(Container)`
  margin-top: 5rem;
`
const JobsFrame = styled.iframe`
  width: 100%;
  min-width: 900px;
  min-height: 800px;
  border: none;
`

const Jobs = () => {
  return (
    <Layout>
      <JobsPageContainer>
        <h3>Current Job Announcements</h3>
        <JobsFrame
          src="https://recruit.zohopublic.com/recruit/Portal.na?iframe=true&digest=sAfFktMKt7vE1xFSw0isrXGAUnkE7bVo.a85bxdBEmQ-"
          frameborder="0"
        ></JobsFrame>
      </JobsPageContainer>
    </Layout>
  )
}

export default Jobs

import React, { Component } from 'react'
import { Grid,Header } from 'semantic-ui-react'
import MetaTags from 'react-meta-tags'

import { HomeHeader, OurPartners } from '../../components'
import Intro from './Intro'
import TrustedBy from './TrustedBy'
import Footer from './Footer'
import SupportCarousel from  './SupportCarousel'
import Impact from './Impact'
import VirtuousCircle from './VirtuousCircle'
import MainContent from './Main';

import './style.less'

import SlidesJSON from './data/slides.json'

class Home extends Component {
  state = {}

  render() {
    return (
      <>
        <MetaTags>
          <title>Fairmint - The Continuous Securities Offerings Platform</title>
        </MetaTags>
        <HomeHeader />
        <Intro />
        <Grid className="pages page-index">
          <Grid.Row>
            <Grid.Column width={14}>
                  <TrustedBy />
                  <SupportCarousel />
                  {/* <Quotes quotes={SlidesJSON.quotes} /> */}
                  <VirtuousCircle />
                  <Impact />
                  <OurPartners />
            </Grid.Column>
            <Grid.Column width={2}>
              <Header className="contentTitle">Contents</Header>
              <MainContent />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Footer />
      </>
    )
  }
}

export default Home

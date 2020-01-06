/* eslint-disable react/no-this-in-sfc */
/* eslint-disable no-return-assign */
import React, { Component } from 'react'
import { Image, Header, Grid } from 'semantic-ui-react'
import Slider from 'react-slick'


import './style.less'

const Introstyle={
  marginLeft:'-590px'
}

class SupportCarousel extends Component {

  render() {
     
    return (
      <section id="learn-more" className="support-carousel-section">
        <Grid container>
          <Grid.Row>
            <Grid.Column width={16} className="investment-loop">
              <div className="desc">
                Investment Loop
              </div>
            </Grid.Column>
            <Grid.Column width={16} className="header">
              <Header className="title" style={Introstyle}>Indroduction</Header>
              <div className="desc">
                <pre>
                  A Continuous Securities Offering (CSO) is a new, updated way for companies to raise funding.                                                                <br />
                  The CSO democratizes investing and modernizes it for the digital era. It expands the pool of                                                                   <br />
                  potential investors, allowing all stakeholders — not just a small group of privileged, wealthy                                                                   <br />
                  investors — to share in the value created by a company’s success.                                                                                                                <br />
                  Consider this: although AirBnB’s 650,000 hosts are critical to its success, most of the $35                                                                      <br />
                  billion in value created by the company will flow to a small number of investors. The CSO was                                                                 <br />
                  designed to disrupt this model and balance the playing field.                                                                                                                          <br />
                </pre>
              </div>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </section>
    )
  }
}

export default SupportCarousel

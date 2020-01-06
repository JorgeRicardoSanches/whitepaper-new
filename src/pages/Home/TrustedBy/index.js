import React from 'react'
import { Grid, Image,Header } from 'semantic-ui-react'

import {
  BoostVcPng,
  CollabPng,
  CygniLabsPng
} from '../../../assets/images/homepage'
import './style.less'
const contentStyle={
  fontSize:'20px'
}
const TrustedBy = () => (
  <section className="trusted-by-section">
    <Header className="summaryTitle">Summary</Header>
    <Grid className="content">
      <Grid.Row>
        <Grid.Column computer={5} widescreen={6} largeScreen={6}>
          <div>
            <pre style={{fontSize:'20px'}}>
              A Continuous Securities Offering (CSO) is a new investment vehicle, updated for                                                          <br /><br /> 
              the digital era.The CSO enables companies with growth potential to raise funding                                                         <br /><br />
              by selling a claim on a reserve,funded primarily by a fixed portion of                                                                   <br /><br />
              revenues. The CSO offers several advantages over traditional financing:
            </pre>
          </div>
        </Grid.Column>
      </Grid.Row>
    </Grid>
    <div className="company-1">
      <Image src={BoostVcPng} className='thumbnail1'/>
      <Image src={CollabPng} className='thumbnail1'/>
      <Image src={CygniLabsPng} className='thumbnail1'/>
      </div>
    <Grid className="content">
          <div>
            <pre style={contentStyle}>
                Fairmint offers a turnkey solution that streamlines companies’ ability to launch                                                     <br /><br />
                and manage their own CSO. This document explains the market shortcomings                                                             <br /><br />
                that the CSO solves and  provides an overview of how a CSO works, including the                                                      <br /><br />
                lifecycle and parameters for trading.
            </pre>
            </div>
    </Grid>
  </section>
)

export default TrustedBy

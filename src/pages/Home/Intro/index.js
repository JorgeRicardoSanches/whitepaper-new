import React from 'react'
import { Header, Button, Image } from 'semantic-ui-react'

import {
  HomeIntroFg,
  BlueCirclePng,
  ArrowsFramePng,
  DoubleCirclePng,
  QuaterRoundVectorPng,
} from '../../../assets/images/homepage'
import './style.less'

const Intro = () => (
  <section className="intro-section">
    <div className="container">
      <Header className="title">Introducing<br /> the continuous<br />
         Securities Offering</Header>
      <div className="desc">
        Financing for the Digital Era
      </div>
      <>
        <Image className="arrows-frame-png" src={ArrowsFramePng} />
        <Image className="half-circle-vector" src={BlueCirclePng} />
        <Image className="quater-round-vector-png" src={QuaterRoundVectorPng} />
        <Image className="quater-double-round-vector-png" src={DoubleCirclePng} />
      </>
    </div>
  </section>
)

export default Intro

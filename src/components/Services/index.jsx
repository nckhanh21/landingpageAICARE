import React from 'react'
import Icon1 from '../../images/onBoarding/onboarding1.png'
import Icon2 from '../../images/onBoarding/onboarding2.png'
import Icon3 from '../../images/onBoarding/onboarding3.png'
import {ServicesContainer, ServicesH1, ServicesWrapper, ServicesCard, ServicesIcon, ServicesH2, ServicesP} from './ServiceElements'

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1}/>
          <ServicesH2>Automatic image analysis</ServicesH2>
          <ServicesP>The system uses AI technology to automatically analyze images from security cameras</ServicesP>
        </ServicesCard>
        <ServicesCard>
        <ServicesIcon src={Icon2}/>
          <ServicesH2>Detect abnormal signs</ServicesH2>
          <ServicesP>Based on the behavioral database, abnormalities can be detected (fall, faint, stroke,...)</ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3}/>
          <ServicesH2>Notification</ServicesH2>
          <ServicesP>Alert users via mobile phone or call them</ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  )
}

export default Services

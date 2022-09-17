import React from 'react'
import { Button } from '../ButtonElements'
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper, TopLine, Heading, Subtitle, BtnWrap, ImgWrap, Img } from './InfoElements'
import { MemberContainer, MemberH1, MemberWrapper, MemberCard, MemberIcon, MemberH2, MemberP } from './MemberElements'
import Icon1 from '../../images/hoang.png'
import Icon2 from '../../images/khanh.png'
import Icon3 from '../../images/manh.jpg'
import Icon4 from '../../images/lam.png'
import Icon5 from '../../images/mem6.jpg'
import Icon6 from '../../images/minh.jpg'


import { Tabs } from 'antd';
import 'antd/dist/antd.min.css';
import Test from '../../pages/test'
const { TabPane } = Tabs;

const onChange = (key) => {
  console.log(key);
};


const InfoTab = ({ lightBg, id, imgStart, topLine, lightText, headline, darkText, description, buttonLabel, alt, img, img1, img2, primary, dark, dark2 }) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <Tabs style={{ marginTop: '10px' }} size={'large'} centered defaultActiveKey="1" onChange={onChange}>
            <TabPane tab="My Team" key="1">
              <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                  <Column1>
                    <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText={lightText}>{headline}</Heading>
                      <Subtitle darkText={darkText}>{description}</Subtitle>
                      <BtnWrap>
                        <Button to='home'
                          smooth={true}
                          duration={500}
                          spy={true}
                          exact='true'
                          offset={-80}
                          primary={primary ? 1 : 0}
                          dark={dark ? 1 : 0}
                          dark2={dark2 ? 1 : 0}
                        >{buttonLabel}
                        </Button>
                      </BtnWrap>
                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={img} alt={alt} />
                      <Img src={img1} alt={alt} />
                    </ImgWrap>
                  </Column2>
                </InfoRow>
              </InfoWrapper>
              {/* Tab 2 ------------------------------ */}
            </TabPane>
            <TabPane tab="Members" key="2">

              <MemberH1>Our Member</MemberH1>
              <MemberWrapper>
                <MemberCard>
                  <MemberIcon src={Icon1} />
                </MemberCard>
                <MemberCard>
                  <MemberIcon src={Icon2} />
                </MemberCard>
                <MemberCard>
                  <MemberIcon src={Icon3} />
                </MemberCard>
                <MemberCard>
                  <MemberIcon src={Icon4} />
                </MemberCard>
                <MemberCard>
                  <MemberIcon src={Icon5} />
                </MemberCard>
                <MemberCard>
                  <MemberIcon src={Icon6} />
                </MemberCard>
              </MemberWrapper>
            </TabPane>
            <TabPane tab="Jobs" key="3">
              <InfoWrapper>
                <InfoRow imgStart={imgStart}>
                  <Column1>
                    <TextWrapper>
                      <TopLine>{topLine}</TopLine>
                      <Heading lightText={lightText}>{"Elderly Healthcare"}</Heading>
                      <Subtitle style={{ "font-size": "10px" }} darkText={darkText}>{"Abstract. Elderly people who are far from relatives or live alone need regu-lar attention to timely detect abnormalities in their health. To solve this prob-lem, technology has been applied to make it easier and more convenient to monitor the health of the elderly remotely. In this work, we proposed a method and system for automatically tracking and detecting behavioral ab-normalities of the elderly via surveillance cameras using deep learning. In our methodology, the elderly will be detected and tracked when appearing on surveillance cameras in their homes. Basic behaviors will be identified from a series of images obtained during the tracking process, including walking, standing, sitting, and lying. After a period of collecting data about the regular behaviors of the monitored elderly, the system will learn from that behavior database then it will be able to monitor and detect abnormalities in the elder-ly's health. We experimented on our dataset collected from a private surveil-lance camera with normal quality. The result showed that our methodology can be used with cheap cameras to provide service for massive homes on el-derly health abnormalities tracking and early warning."}</Subtitle>

                    </TextWrapper>
                  </Column1>
                  <Column2>
                    <ImgWrap>
                      <Img src={img2} alt={alt} />
                    </ImgWrap>
                  </Column2>
                </InfoRow>
              </InfoWrapper>
            </TabPane>
            
          </Tabs>

        </InfoWrapper>
      </InfoContainer>
    </>
  )
}

export default InfoTab

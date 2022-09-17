import teamimg from '../../assets/images/team.jpg';
import teamimg1 from '../../assets/images/team1.jpg';
import elder from '../../assets/images/elder.jpeg';
import homescreen from '../../assets/images/homescreen.png';

import app from '../../images/personal.png';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'AICare team',
  headline: 'Young, dynamic, creative',
  description: 'AI Care in VSCS 2022',
  buttonLabel: 'Get started',
  imgStart: false,
  img: teamimg,
  img1: teamimg1,
  img2: elder,
  alt: 'aicareteam',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: false,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description: 'Easy to use, friendly interface',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: app,
  alt: 'myapp',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'AICare',
  headline: 'Our method',
  description: 'In our method, videos from surveillance cameras will be streamed to an object detection model. The objects detected in each frame may be the elderly, visitors, or other objects such as bed, chair, sofa. From the locations and visual appear-ances of detected objects, they will be tracked through the continuous frames of video by a multi-class multi-object tracking model. The images of elderly people will also be fed into an image classification model to identify behaviors such as standing, sitting, or lying. The walking behavior can be identified by considering the distance between the locations of elderly in a continuous frame.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: homescreen,
  alt: 'car',
  primary: false,
  darkText: true
};

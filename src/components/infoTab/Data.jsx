import teamimg from '../../assets/images/team.jpg';

export const homeObjOne = {
  id: 'about',
  lightBg: false,
  lightText: true,
  lighttextDesc: true,
  topLine: 'AICare team',
  headline: 'Young, dynamic, creative',
  description: 'AI Care in VSCS 2022 ',
  buttonLabel: 'Get started',
  imgStart: false,
  img: teamimg,
  alt: 'aicareteam',
  dark: true,
  primary: true,
  darkText: false
};

export const homeObjTwo = {
  id: 'discover',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Unlimited Access',
  headline: 'Login to your account at any time',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
  buttonLabel: 'Learn More',
  imgStart: true,
  img: '/images/svg-4.svg',
  alt: 'Piggybanck',
  dark: false,
  primary: false,
  darkText: true
};

export const homeObjThree = {
  id: 'signup',
  lightBg: true,
  lightText: false,
  lighttextDesc: false,
  topLine: 'Premium Bank',
  headline: 'Creating an account is extremely easy',
  description: 'Get access to our exclusive app that allows you to send unlimited transactions whitout getting charged any fees.',
  buttonLabel: 'Start Now',
  imgStart: false,
  img: '/images/svg-3.svg',
  alt: 'car',
  primary: false,
  darkText: true
};

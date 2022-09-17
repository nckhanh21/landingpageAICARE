import styled from 'styled-components'

export const MemberContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
 `
export const MemberWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px) {
      grid-template-columns: 1fr 1fr;
  }

    @media screen and (max-width: 786px) {
      grid-template-columns: 1fr;
      padding: 0 20px;
  }
`
export const MemberCard = styled.div`
  background: #0575E6;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 20px;
  max-height: 340px;
  padding:  5px;
  box-shadow: 0 1px 3px rgba(0,0,0,0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    cursor:pointer;
  }
`
export const MemberIcon = styled.img`
  height: 165px;
  width: 165px;
  margin-bottom: 0px;
  object-fit: cover;
  border-radius: 10%;
`
export const MemberH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 20px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }  
`
export const MemberH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`

export const MemberP = styled.p`
  font-size: 1rem;
  text-align: center;
`



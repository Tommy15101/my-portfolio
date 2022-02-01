import styled, {keyframes} from 'styled-components';

const dropDown = keyframes`
  from {
    transform: translateX(100%);
  }

  to {
    transform: translateX(0%);
  }
`

export const SkillsMainContainer = styled.div`
    max-height: 100vh;
    max-width: 100vw;
    display: grid;
    grid-template-rows: 5fr 1fr;
`
export const SkillsIconContainer = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    justify-content: space-evenly;
    background-color: rgba(0,0,0,0.6);
    animation: ${dropDown} 1s ease-in-out; 
`
export const SingleSkill = styled.div`
  cursor: pointer;
  font-size: 80px;
  color: white;
  &:hover {
    transform: scale(1.2);
    color: black;
  }
  @media (max-width: 768px) {
    font-size: 55px;
  }
  @media (max-width: 576px) {
    max-width: 100%;
    font-size: 40px;
  }
`

export const SkillsInformationContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const SkillsInformationWindow = styled.div`
  width: 80%;
  height: 80%;
  margin-top: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`
export const SkillsBlock = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  a {
    margin-bottom: 80px;
    font-size: 20px;
    color: black;
    text-decoration: none;
    transition: all .2s ease-in-out;
    text-align: center;
    &:hover {
      transform: scale(1.2);
    }
    @media (max-width: 768px) {
      font-size: 15px;
    }
    @media (max-width: 576px) {
    font-size: 10px;
    }
  }
`
export const Skill = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 60px;
  @media (max-width: 576px) {
    font-size: 30px;
  }
`


// Small / Landscape / Phones - @media (max-width: 576px)
// Medium / Tabets - @media (max-width: 768px)
// Large / Laptops - @media (max-width: 992px)
// XL / Dektops - @media (max-width: 1200px)
// XXL / Monitors - @media (max-width: 1400px)
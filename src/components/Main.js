import React from 'react';
import { 
  HomeMainContainer,
  WelcomeHeader,
  WelcomeText,
  WelcomeLeft,
  WelcomeRight 
} from '../styles/MainStyle';

const Main = () => {
  return (
    <HomeMainContainer>
      <WelcomeHeader><h1>Hi, I'm Tommy</h1></WelcomeHeader>
      <WelcomeText>
        <WelcomeLeft>
          <h3>Blockchain Developer</h3>
        </WelcomeLeft>
        <WelcomeRight><h3>Cryptocurrency Enthusiast</h3></WelcomeRight>
      </WelcomeText>
    </HomeMainContainer>
  )
};

export default Main;

import React from "react";
import { Bio } from "../../data/constants";
import {
  HeroContainer,
  HeroBg,
  HeroInnerContainer,
  HeroLeftContainer,
  HeroRightContainer,
  Title,
  TextLoop,
  Span,
  SubTitle,
  ResumeButton,
  Img,
} from "./HeroStyle.js";
import Typewriter from "typewriter-effect";
import MyImage from "../../images/my-image.jpg";
import HeroBgAnimation from "../HeroBgAnimation/HeroBgAnimation.jsx";

const Hero = () => {
  return (
    <div id='about'>
      <HeroContainer>
        <HeroBg>
          <HeroBgAnimation />
        </HeroBg>
        <HeroInnerContainer>
          <HeroLeftContainer>
            <Title>
              Hi, I am <br />
              {Bio.name}
            </Title>
            <TextLoop>
              Iam a
              <Span>
                <Typewriter
                  options={{ strings: Bio.roles, autoStart: true, loop: true }}
                />
              </Span>
            </TextLoop>
            <SubTitle>{Bio.description}</SubTitle>
            <ResumeButton href={Bio.resume} target='_blank'>
              Resume
            </ResumeButton>
          </HeroLeftContainer>
          <HeroRightContainer>
            <Img src={MyImage} alt={Bio.name} />
          </HeroRightContainer>
        </HeroInnerContainer>
      </HeroContainer>
    </div>
  );
};

export default Hero;

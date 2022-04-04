import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Span } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
          Gideon A. Udoh<br/>
            <Span>BSc, Computer Science, University of Port Harcourt(UNIPORT)</Span><br/>
            <Span>Business Management, Henley Business School, University of Reading</Span>
          </SectionTitle>
          <SectionText>
          I am a confident, enthusiastic and charismatic computer scientist with a sound academic background, seeking an opportunity to be part of a highly reputable organization and motivated workforce where my skills, potentials and abilities can be harnessed as well as creating expertise solutions through a variety of techniques and technologies while facilitating and making a significant contribution to the accomplishment of the organizational goals.          
          </SectionText>
          <Button onClick={() => window.location = 'https://linkedin.com'} style="transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg);" >Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;
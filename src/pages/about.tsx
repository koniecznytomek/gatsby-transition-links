import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image/Image';
import LinkFade from '../components/TransitionLinks/LinkFade';
import LinkSlideLeft from '../components/TransitionLinks/LinkSlideLeft';
import LinkSlideRight from '../components/TransitionLinks/LinkSlideRight';
import LinkSlideUp from '../components/TransitionLinks/LinkSlideUp';
import LinkSlideDown from '../components/TransitionLinks/LinkSlideDown';
import LinkCoverLeft from '../components/TransitionLinks/LinkCoverLeft';
import LinkCoverRight from '../components/TransitionLinks/LinkCoverRight';
import LinkFadeUp from '../components/TransitionLinks/LinkFadeUp';
import LinkFadeDown from '../components/TransitionLinks/LinkFadeDown';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  background: #ccc;

  .Work {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1 / -1;

    &__image-one {
      grid-column: 5 / 12;
      width: 100%;
    }
    
    &__image-two {
      grid-column: 1 / 4;
      width: 100%;
    }
    
    &__link-one {
     grid-column: 2 / 6;
     padding: 100px;
     a {
        color: #000;
        display: block;
     }
  }
`;
export const About = () => {
  return (
    <>
      <Container>
        <div className="Work">
          <div className="Work__image-one">
            <LinkFade url={'/'}>
              <Image src="1.jpeg" alt="" />
            </LinkFade>
          </div>
          <div className="Work__link-one">
            <LinkSlideLeft url={'/'}>Link Slide Left</LinkSlideLeft>
            <LinkSlideRight url={'/'}>Link Slide Right</LinkSlideRight>

            <LinkSlideUp url={'/'}>Link Slide Up</LinkSlideUp>
            <LinkSlideDown url={'/'}>Link Slide Down</LinkSlideDown>

            <LinkFade url={'/'}>Link Fade</LinkFade>
            <LinkFadeUp url={'/'}>Link Fade Up</LinkFadeUp>
            <LinkFadeDown url={'/'}>Link Fade Down</LinkFadeDown>

            <LinkCoverLeft url={'/'}>Link Cover Left</LinkCoverLeft>
            <LinkCoverRight url={'/'}>Link Cover Right</LinkCoverRight>
          </div>
          <div className="Work__image-two">
            <LinkSlideLeft url={'/'}>
              <Image src="2.jpeg" alt="" />
            </LinkSlideLeft>
          </div>
        </div>
      </Container>
    </>
  );
};

export default About;

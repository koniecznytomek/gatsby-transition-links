import React from 'react';
import styled from 'styled-components';
import Image from '../components/Image/Image';
import LinkFade from '../components/TransitionLinks/LinkFade';
import LinkSlideLeft from '../components/TransitionLinks/LinkSlideLeft';
import LinkSlideUp from '../components/TransitionLinks/LinkSlideUp';
import LinkSlideDown from '../components/TransitionLinks/LinkSlideDown';
import LinkSlideRight from '../components/TransitionLinks/LinkSlideRight';
import LinkCoverLeft from '../components/TransitionLinks/LinkCoverLeft';
import LinkCoverRight from '../components/TransitionLinks/LinkCoverRight';
import LinkFadeUp from '../components/TransitionLinks/LinkFadeUp';
import LinkFadeDown from '../components/TransitionLinks/LinkFadeDown';

export const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-template-columns: repeat(12, 1fr);
  position: relative;
  background: #fff;

  .Work {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: repeat(12, 1fr);
    grid-column: 1 / -1;

    &__image-one {
      grid-column: 1 / 6;
      width: 100%;
    }
    
    &__image-two {
      grid-column: 4 / 8;
      width: 100%;
    }
    
    &__link-one {
     grid-column: 1 / 6;
     padding: 100px;
     a {
        color: #000;
        display: block;
     }
  }
`;
export const Home = () => {
  return (
    <>
      <Container>
        <div className="Work">
          <div className="Work__image-one">
            <LinkFade url={'/about'}>
              <Image src="1.jpeg" alt="" />
            </LinkFade>
          </div>
          <div className="Work__link-one">
            <LinkSlideLeft url={'/about'}>Link Slide Left</LinkSlideLeft>
            <LinkSlideRight url={'/about'}>Link Slide Right</LinkSlideRight>

            <LinkSlideUp url={'/about'}>Link Slide Up</LinkSlideUp>
            <LinkSlideDown url={'/about'}>Link Slide Down</LinkSlideDown>

            <LinkFade url={'/about'}>Link Fade</LinkFade>
            <LinkFadeUp url={'/about'}>Link Fade Up</LinkFadeUp>
            <LinkFadeDown url={'/about'}>Link Fade Down</LinkFadeDown>


            <LinkCoverLeft url={'/about'}>Link Cover Left</LinkCoverLeft>
            <LinkCoverRight url={'/about'}>Link Cover Right</LinkCoverRight>


          </div>
          <div className="Work__image-two">
            <LinkSlideLeft url={'/about'}>
              <Image src="2.jpeg" alt="" />
            </LinkSlideLeft>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Home;

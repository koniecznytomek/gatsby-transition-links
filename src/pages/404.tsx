import React from 'react';
import styled from 'styled-components';
import { font } from '../styles/const';

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  min-height: 100vh;

  .info {
    grid-row: 1;
    grid-column: 1 / -1;
    align-self: center;
    justify-self: center;
    text-align: center;
    h1 {
      ${font.small};
    }
    p {
      ${font.normal};
    }
  }
`;

const NotFoundPage = () => (
  <>
    <Container>
      <div className="info">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </Container>
  </>
);

export default NotFoundPage;

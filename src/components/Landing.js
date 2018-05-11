import React from 'react';
import styled from 'styled-components';


const H1= styled.h1`
  font-family: fantasy;
  color: automatic;
`;

const H2= styled.h2`
  font-family: fantasy;
  color: automatic;
`;

const P= styled.p`
  font-style: oblique;
  color: automatic;
`;

const Landing = () => (
  <section className="landing">
    <H1 className="hero-title">Turn the music up!</H1>

    <section className="selling-points">
      <div className="points">
        <H2 className="point-title">Choose your music</H2>
        <P className="point-description">The world is full of music; why should you have to listen to music that someone else chose?</P>
      </div>
      <div className="point">
        <H2 className="point-title">Unlimited, streaming, ad-free</H2>
        <P className="point-description">No arbitrary limits. No distractions.</P>
      </div>
      <div className="point">
        <H2 className="point-title">Mobile enabled</H2>
        <P className="point-description">Listen to your music on the go. This streaming service is available on all mobile platforms.</P>
      </div>
    </section>
  </section>
);

export default Landing;

//Component

import React from 'react';
import styled from 'styled-components';
import { HomePage, Hero, HeroColumns, HeroCallout, Testimonials } from '../components';

const Title = styled.h1`
  font-size: 4rem;
  color: red;
`;

export default () => (
  <HomePage>
    <Hero />
    <Title>HELLO STYLED COMPONENTS</Title>
    <HeroColumns />
    <Testimonials />
    <HeroCallout />
  </HomePage>
);

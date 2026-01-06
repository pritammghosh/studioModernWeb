import React from 'react';
import Hero from '../components/Hero';
import BeliefStatement from '../components/BeliefStatement';
import SelectedWork from '../components/SelectedWork';
import Process from '../components/Process';
import Services from '../components/Services';
import Authority from '../components/Authority';
import FinalCTA from '../components/FinalCTA';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <BeliefStatement />
      <SelectedWork />
      <Process />
      <Services />
      <Authority />
      <FinalCTA />
    </>
  );
};

export default Home;
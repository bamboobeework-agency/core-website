import React from 'react';
import { useOutletContext } from 'react-router-dom';
import Hero from '../components/Hero';
import EcommerceSolutions from '../components/EcommerceSolutions';
import Services from '../components/Services';
import Process from '../components/Process';
import CaseStudies from '../components/CaseStudies';
import FAQ from '../components/FAQ';

interface LayoutContext {
  openAudit: () => void;
}

const Home: React.FC = () => {
  const { openAudit } = useOutletContext<LayoutContext>();

  return (
    <>
      <Hero onOpenAudit={openAudit} />
      <EcommerceSolutions />
      <Services />
      <Process />
      <CaseStudies />
      <FAQ />
    </>
  );
};

export default Home;
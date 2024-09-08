import "./globals.css";
import AppBanks from '@/components/App-banks';
import PersonLanding from '../components/Person-landing';
import WhyUseRextie from '@/components/Why-use-rextie';
import SectionText from '@/components/Section-text';
import AmountsRextie from "@/components/Amounts-rextie";
import SectionMarquee from "@/components/Section-marquee";
import WhatDoYouDink from "@/components/What-do-you-dink";
import PressRextie from "@/components/Press-rextie";
import DowloandApp from "@/components/Dowloand-app";
import ScrollTop from "@/components/UI/Scroll-top";

export default function Home() {
  return (
    <main>
      <PersonLanding />
      <AppBanks />
      {/*<WhyUseRextie />*/}
      <SectionText />
      {/*<AmountsRextie />*/}
      <SectionMarquee />
      <WhatDoYouDink />
      {/*<PressRextie />*/}
      <DowloandApp />
      <ScrollTop />
    </main>
  );
}

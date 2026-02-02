import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { TrustSignals } from '../components/TrustSignals';
import { Services } from '../components/Services';
import { TheStandard } from '../components/TheStandard';
import { WhyLuxElite } from '../components/WhyLuxElite';
import { Process } from '../components/Process';
import { ClientPerspectives } from '../components/ClientPerspectives';
import { SocialProof } from '../components/SocialProof';
import { FinalCTA } from '../components/FinalCTA';
import { Footer } from '../components/Footer';

export default function App() {
  return (
    <div className="w-full" style={{ backgroundColor: '#000000' }}>
      <Header />
      <Hero />
      <TrustSignals />
      <Services />
      <TheStandard />
      <WhyLuxElite />
      <Process />
      <ClientPerspectives />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </div>
  );
}

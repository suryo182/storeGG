import type { NextPage } from 'next';
import FeatureStep from '../components/organisms/FeatureStep';
import FeatureGame from '../components/organisms/FeatureGame';
import HomeSection from '../components/organisms/HomeSection';
import Navbar from '../components/organisms/Navbar';
import ReachedSection from '../components/organisms/ReachedSection';
import StorySection from '../components/organisms/StorySection';
import Footer from '../components/organisms/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <HomeSection />
      <FeatureStep />
      <FeatureGame />
      <ReachedSection />
      <StorySection />
      <Footer />
    </>
  );
};

export default Home;

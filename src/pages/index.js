import Meta from '@/components/Meta/index';
import { LandingLayout } from '@/layouts/index';
import {
  CallToAction,
  Features,
  Footer,
  Guides,
  Hero,
  Pricing,
  Testimonial,
} from '@/sections/index';

const Home = () => {
  return (
    <LandingLayout>
      <Meta
        title="Liiska"
        description="The ultimate p2p environment"
      />
      <Hero />
      <Features />
      <Pricing />
      <Guides />
      <Testimonial />
      <CallToAction />
      <Footer />
    </LandingLayout>
  );
};

export default Home;

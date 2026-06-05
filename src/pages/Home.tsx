import Hero from '../components/sections/Hero';
// import ServicesSection from '../components/home/ServicesSection';
// import GovernmentActivitySection from '../components/home/GovernmentActivitySection';
import TourismPreviewSection from '../components/home/TourismPreviewSection';
import ContactPreviewSection from '../components/home/ContactPreviewSection';
import WeatherMapSection from '../components/home/WeatherMapSection';
import SEO from '../components/SEO';

const Home: React.FC = () => {
  return (
    <>
      <SEO
        title="Home"
        description="Official website of your local government. Access government services, information, and resources."
        keywords="government, local government, services, public services, civic services"
      />
      <main className="flex-grow">
        <Hero />
        <TourismPreviewSection />
        <ContactPreviewSection />
        <WeatherMapSection />
        {/* <ServicesSection />
        <GovernmentActivitySection /> */}
      </main>
    </>
  );
};

export default Home;

import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Gallery from '../components/Gallery';
import BookingForm from '../components/BookingForm';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div id="o-nas">
        <Services />
      </div>
      <Reviews />
      <Gallery />
      <BookingForm />
    </div>
  );
};

export default Home;

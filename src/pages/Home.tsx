import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Reviews from '../components/Reviews';
import Animators from '../components/Animators';
import BookingForm from '../components/BookingForm';

const Home: React.FC = () => {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <div id="o-nas">
        <Services />
      </div>
      <Animators />
      <Reviews />
      <BookingForm />
    </div>
  );
};

export default Home;

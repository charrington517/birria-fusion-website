import React, { useState, useEffect } from 'react';
import HeroSection from '@/components/home/HeroSection';
import FeaturedSection from '@/components/home/FeaturedSection';
import AboutSnippet from '@/components/home/AboutSnippet';
import { sanity } from '@/lib/sanity';

export default function Home() {
  const [truckLocation, setTruckLocation] = useState(null);

  useEffect(() => {
    sanity.fetch(`*[_type == "truckLocation"][0]`).then(setTruckLocation);
  }, []);

  return (
    <div>
      <HeroSection truckLocation={truckLocation} />
      <FeaturedSection />
      <AboutSnippet />
    </div>
  );
}

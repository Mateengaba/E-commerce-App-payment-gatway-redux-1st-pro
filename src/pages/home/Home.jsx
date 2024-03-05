import React, { useContext } from 'react';
import Layout from '../../components/layout/Layout';
import myContext from '../../context/data/myContext';
import Hero from '../../components/Hero/Hero';
import Filter from '../../components/filter/Filter';
import ProductCard from '../../components/ProductCard/ProductCard';
import Track from '../../components/Track/Track';
import Testimonial from '../../components/Testimonial/Testimonial';

import { Link } from 'react-router-dom';

function Home() {
 

  return (
    <Layout> 




      <Hero/>
      <Filter/>
   <ProductCard/>

   <div className="flex justify-center -mt-10 mb-4">
        <Link to={'/allproducts'}>
          <button className=' bg-gray-300 px-5 py-2 rounded-xl'>See more</button>
        </Link>
      </div>
   
   <Track/>
   <Testimonial/>
        </Layout>
  );
}

export default Home;

import { lazy } from 'react';
import About from '../../Components/Home/About';

const HeroSection = lazy(() => import('../../Components/Home/HeroSection'));
const PowerfulFeatures = lazy(() => import('../../Components/Home/PowerfulFeatures'));
const Contact = lazy(() => import('../../Components/Home/Contact'));


const Page = () => {
  return (
    <div className='Home_Page'>
      <HeroSection/>
      <PowerfulFeatures/>
      <About/>
      <Contact/>
    </div>
  )
}

export default Page
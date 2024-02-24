import { lazy } from 'react';

const HeroSection = lazy(() => import('../../Components/Home/HeroSection'));
const PowerfulFeatures = lazy(() => import('../../Components/Home/PowerfulFeatures'));
const Contact = lazy(() => import('../../Components/Home/Contact'));


const Page = () => {
  return (
    <div className='Home_Page'>
      <HeroSection/>
      <PowerfulFeatures/>
      <Contact/>
    </div>
  )
}

export default Page
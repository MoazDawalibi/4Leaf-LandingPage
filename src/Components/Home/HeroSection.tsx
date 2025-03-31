import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Visibale from '../../HOC/withVisibale'

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <Visibale className='HeroSection' id="Home">
      <div className="in_HeroSection" id="Home">
        <h1>
          {/* {t('hero.name')} */}
          {/* <br /> */}
          {t('Four Leaf ')}
        </h1>
        <p>
          {t('We are excited to have you here')}!
          <strong> {t('Our mission is')} </strong>
          {t('to make shopping easier for you by bringing your favorite products from international e-commerce platforms like Amazon - Shein - Trendyol and Noon right to your doorstep')}.
          {/* 
          {t('to make shopping easier for you by bringing your favorite products from international e-commerce platforms like Shein, Amazon, and Trendyol etc... right to your doorstep')}.
          */}
        </p>
        <div className='Buttons'>
          <Link to={"https://www.instagram.com/4leaf_shein?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"}>
            <button>
              {t('Our Instagram')}
            </button>
          </Link>
          <a href="#Contact">
            <button className='SecButton'>
              {t('Contact Us')}
            </button>
          </a>
        </div>
      </div>
    </Visibale>
  );
};

export default HeroSection;

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
          {t('Four Leaf Shein')}
        </h1>
        <p>
          {t('Welcome to the page, and God willing, you will be happy with the dealings and prices')}.
          <strong> {t('This is a brief summary of the page We will bring you your orders from Shein In principle')},</strong>
          {t('We will charge shipping fees that suit everyone, and God willing, we will continue to work with you')}.
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

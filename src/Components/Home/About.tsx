import React from 'react';
import { useTranslation } from 'react-i18next';
import AboutImage from '../About/AboutImage';
import { TbPointFilled } from "react-icons/tb";

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="Contact about" id="About">
      <div>
        <h1>{t('About Us')}</h1>
          <h4>{t("What We Do")} :</h4>
          <p>{t("We specialize in helping you purchase items from various online stores around the world. Our team ensures that your orders are carefully handled and shipped to you at competitive rates that fit everyone's budget. We strive to provide a seamless shopping experience, making it easy for you to enjoy products from different countries without the hassle of international shipping")}.</p>

          <h4>{t("Stay Tuned for Updates and Offers")} !</h4>
          <p>{t("We're committed to continuously improving our services to meet your needs. Follow us for updates, promotions, and more")}!</p>
      </div>
      <div className='right'>
        <AboutImage />
      </div>
    </div>
  );
};

export default About;

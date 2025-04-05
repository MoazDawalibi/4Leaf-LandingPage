import { Button, Divider } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className='Footer'>
      <div>
        <div>
          <h1>{t('Shipping site for your orders')}</h1>
          <p>{t('Send us your orders on our Instagram page and enjoy low shipping costs and a short delivery period')}.</p>
        </div>
        <div className='ContactFooter'>
          <h1>{t('Contact Us')}</h1>
          {/* <h2>{t('Phone')}: 0958261912</h2> */}
          <h3>{t('Our Instagram')}: <Link to={"https://www.instagram.com/4leaf_shein?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"}>@4Leaf</Link></h3>
          <h3>{t('Our Number')}: <Link to={"https://www.instagram.com/4leaf_shein?igsh=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr"}>0984600159</Link></h3>
        </div>
      </div>
      <Divider />
      <span>
        <div>
          {t('footer.rightsReserved')}
        </div>
        <div>
          <span>
            {t('footer.privacyPolicy')}
          </span>
          <span>
            {t('footer.cookiePolicy')}
          </span>
        </div>
      </span>
    </div>
  );
}

export default Footer;

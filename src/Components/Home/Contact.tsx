import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import ContactImage from './ContactImage';

const Contact: React.FC = () => {
  const { t } = useTranslation();



  return (
    <div className="Contact" id="Contact">
      <div>
        <h1>{t('Contact Us')}</h1>
        <p>{t('Send your messages to our page by scaning this code or clicking on the link')}.</p>
        <ContactImage />
      </div>
      <div className='right'>
        <div className='PageLink'>
          <span>{t("Click on this link")}:</span><br/>
          <Link className='Link' to={"https://www.instagram.com/fourleaf_orders?igsh=cG9wcWt6NnIxanVn&utm_source=qr"}>
            FourLeaf_Orders@instagram.com 
          </Link>
        </div>
        <div className='qr_container'>
          <img src='/QR.PNG' className='QRCode'/>

        </div>
      </div>
    </div>
  );
};

export default Contact;

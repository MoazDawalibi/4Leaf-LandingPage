import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';
import { toast } from 'react-toastify';
import ContactImage from './ContactImage';
import { Link } from 'react-router-dom';

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
          <Link className='Link' to={"https://www.instagram.com/4leaf_shipping?igsh=MTRwdm83M2EwNXp3dg%3D%3D&utm_source=qr"}>
            4Leaf@instagram.com 
          </Link>
        </div>
        <div className='qr_container'>
          <img src='/QR.JPG' className='QRCode'/>

        </div>
      </div>
    </div>
  );
};

export default Contact;

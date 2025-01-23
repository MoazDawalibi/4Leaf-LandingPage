import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FloatButton } from 'antd';
import { FaLanguage } from 'react-icons/fa';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';
//@ts-ignore
interface NavLink {
  label: string;
  to: string;
}

export const NavigationLinks = ({ className }: any) => {
  const [t] = useTranslation();
  const location = useLocation();
  const { currentLanguage, changeLanguage } = useChangeLanguage();

  const links: NavLink[] = [
    { label: t('Home'), to: '#Home' },
    { label: t('Delivery Prices & Features'), to: '#features' },
    // { label: t('education'), to: '#education' },
    // { label: t('Delivery Prices'), to: '#Prices' },
    { label: t('About Us'), to: '#About' },
    { label: t('Contact Us'), to: '#Contact' },
    { label: t(''), to: '' },
  ];

  const scrollToElement = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const renderNavLinks = (links: NavLink[]) => (
    <ul className={className} role="navigation">
      {links.map((link, index) => (
        <li key={index} className={`${location.pathname}${location.hash}` === link.to ? 'active' : ''}>
          {
            link.to !== 'download' ?
            <>
              <Link
              to={link.to}
              onClick={() => {
                if (link.to.startsWith('#')) {
                  scrollToElement(link.to.substring(1));
                }
              }}
            >
              {link.label}
            </Link>
            <div className='floatButt'>
            <FloatButton onClick={()=>{
              currentLanguage === "en" ? changeLanguage("ar")  : changeLanguage("en")
            }} icon={<FaLanguage />}  />
            </div>
            </>
            :
            ""
            // <a
            //   href={'../MohammedKarimAldenResume.pdf'}
            //   download
            // >
            //   {link.label}
            // </a>
          }
        </li>
      ))}
    </ul>
  );

  return renderNavLinks(links);
};

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {  MenuOutlined } from '@ant-design/icons';
import WithDrawer from '../../HOC/WithDrawer';
import { Button, FloatButton } from 'antd';
import { useTranslation } from 'react-i18next';
import { FaArrowAltCircleRight, FaLanguage } from 'react-icons/fa';
import { NavigationLinks } from './NavigationLinks';
import useScrollEffects from './useScrollEffects';
import { useChangeLanguage } from '../../Hooks/useChangeLanguage';

const Header = () => {
  const [t] = useTranslation();
  useScrollEffects()
  const { currentLanguage, changeLanguage } = useChangeLanguage();

    return (
      <header className='Header'>
        <Link to='/#Home'>
          {/* <div className='Logo' role='img' aria-label='Logo' /> */}
        <img src='/4Leaf.png' className='Logo' />
        </Link>
        <nav className='Nav'>
           <NavigationLinks className="Links" />
          <div className='MenuNav '>
            <WithDrawer

              title='.'
              button={<Button icon={<MenuOutlined />} type='primary' />}
            >
             <NavigationLinks className="DrawerLinks" />
             
            </WithDrawer>
          </div>
          <div className='floatButt'>
            <FloatButton onClick={()=>{
              currentLanguage === "en" ? changeLanguage("ar")  : changeLanguage("en")
            }} icon={<FaLanguage />}  />
            </div>
        </nav>
      </header>
    );
};

export default Header;

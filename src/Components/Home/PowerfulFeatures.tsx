import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';
import { FaReact, FaGithub, FaFigma, FaSearchengin, FaSass } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiDesignernews } from 'react-icons/si';
import { CiMobile3 } from "react-icons/ci";
import { FaBagShopping,FaGlasses,FaShirt } from "react-icons/fa6";
import { GiAmpleDress } from "react-icons/gi";
import { IoWatch } from "react-icons/io5";
import { MdMobileScreenShare,MdOutlineProductionQuantityLimits } from "react-icons/md";
import { PiPantsLight } from "react-icons/pi";

const PowerfulFeatures = () => {
  const { t } = useTranslation();

  const skillsData:any = [
    { title: t('Acessories'),price:"7,000 S.P", imgSrc:"/icons/bracelet.svg" },
    { title: t('Sunglasses'),price:"8,000 S.P", icon: <FaGlasses /> },
    { title: t('Mobile Cases'),price:"8,000 S.P", icon: <CiMobile3 /> },
    { title: t('Makeup'),price:"8,000 S.P", imgSrc:"/icons/makeup.svg" },

    { title: t('Winter Clothes'),price:"18,000 S.P", imgSrc:"/icons/hoody.svg" },
    { title: t('Summer Clothes'),price:"15,000 S.P", icon: <FaShirt /> },
    { title: t('Bags'),price:"18,000 S.P", icon: <FaBagShopping /> },
    { title: t('Shoes'),price:"18,000 S.P", imgSrc:"/icons/shoe.svg" },
    
    { title: t('Pants'),price:"18,000 S.P", icon:<PiPantsLight/> },
    { title: t('Watches'),price:"10,000 S.P", icon: <IoWatch /> },
    { title: t('Mobile Acessories'),price:"7,000 S.P", icon: <MdMobileScreenShare /> },
    { title: t('Dresses'),price:"20,000 S.P", icon: <GiAmpleDress /> },
    
    { title: t('Others'),price:t("Depends On Sizes"), icon:<MdOutlineProductionQuantityLimits/> },

  ];

  return (
    <div className="PowerfulFeatures" id='features'>
      <div className="in">
        <h1 className='title'>{t('Delivery Prices & Features')}</h1>
        <Visibale className='Features'>
          {skillsData?.map((item: any, index: number) => (
            <div className="Feature" key={index}>
              {
              item?.icon ?item?.icon :<img className='feature_image' src={item?.imgSrc}/>
              }
              <h1>{t(`${item?.title}`)}</h1>
              <h1 className='prices'>{t("Delivery Price")} <span> {t(`${item?.price}`)}</span></h1>
            </div>
          ))}
        </Visibale>
      </div>
    </div>
  );
};

export default PowerfulFeatures;

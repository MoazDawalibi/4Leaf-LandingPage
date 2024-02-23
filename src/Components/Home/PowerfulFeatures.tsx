import React from 'react';
import Visibale from '../../HOC/withVisibale';
import { useTranslation } from 'react-i18next';
import { FaReact, FaGithub, FaFigma, FaSearchengin, FaSass } from 'react-icons/fa';
import { SiTypescript, SiSolidity, SiDesignernews } from 'react-icons/si';
import { CiMobile3 } from "react-icons/ci";
import { FaBagShopping,FaGlasses,FaShirt } from "react-icons/fa6";

const PowerfulFeatures = () => {
  const { t } = useTranslation();

  const skillsData = [
    { title: t('Acessories'),price:"3,000 S.P", imgSrc:"/icons/bracelet.svg" },
    { title: t('Sunglasses'),price:"4,000 S.P", icon: <FaGlasses /> },
    { title: t('Mobile Cases'),price:"4,000 S.P", icon: <CiMobile3 /> },
    { title: t('Makeup'),price:"4,000 S.P", imgSrc:"/icons/makeup.svg" },
    { title: t('Winter Clothes'),price:"10,000 S.P", imgSrc:"/icons/hoody.svg" },
    { title: t('Summer Clothes'),price:"7,000 S.P", icon: <FaShirt /> },
    { title: t('Bags'),price:"10,000 S.P", icon: <FaBagShopping /> },
    { title: t('Shoes'),price:"10,000 S.P", imgSrc:"/icons/shoe.svg" },
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

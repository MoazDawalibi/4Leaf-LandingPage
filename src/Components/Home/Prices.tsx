import React from 'react'
import { CiMobile3 } from 'react-icons/ci';
import { FaGlasses } from 'react-icons/fa';
import { FaBagShopping, FaShirt } from 'react-icons/fa6';

const Prices = () => {
  const skillsData = [
    { title: 'Acessories', imgSrc:"/icons/bracelet.svg" },
    { title: 'Clothes', icon: <FaShirt /> },
    { title: 'Sunglasses', icon: <FaGlasses /> },
    { title: 'Mobile Cases', icon: <CiMobile3 /> },
    { title: 'Makeup', imgSrc:"/icons/makeup.svg" },
    { title: 'Shoes', imgSrc:"/icons/shoe.svg" },
    { title: 'Bags', icon: <FaBagShopping /> },
    { title: 'Jeans', imgSrc:"/icons/jeanss.svg" },
  ];

  return (
    <div id='Prices'>
      <h1 className='title'>Delivery Prices</h1>
      <div className='Prices_Types'>
        
      </div>
    </div>
  )
}

export default Prices
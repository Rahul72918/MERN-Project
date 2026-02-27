import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import {Link} from 'react-router-dom'

const ProductItem = ({id,image,name,price}) => {
    
    const {currency, displayCurrency, conversionRate} = useContext(ShopContext);

    const displayPrice = displayCurrency === 'INR' 
        ? Math.round(price * conversionRate) 
        : price;

  return (
    <Link onClick={()=>scrollTo(0,0)} className='text-gray-700 cursor-pointer' to={`/product/${id}`}>
      <div className='overflow-hidden w-full h-80'>
        <img className='hover:scale-110 transition ease-in-out w-full h-full object-cover' src={image[0]} alt="" />
      </div>
      <p className='pt-3 pb-1 text-sm'>{name}</p>
      <p className='text-sm font-medium'>{currency}{displayPrice}</p>
    </Link>
  )
}

export default ProductItem


import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';

const CartTotal = () => {

    const {currency, delivery_fee, getCartAmount, displayCurrency, conversionRate} = useContext(ShopContext);
    
    const subtotal = getCartAmount();
    const displaySubtotal = displayCurrency === 'INR' ? Math.round(subtotal * conversionRate) : subtotal;
    const displayDeliveryFee = displayCurrency === 'INR' ? Math.round(delivery_fee * conversionRate) : delivery_fee;
    const displayTotal = displaySubtotal + displayDeliveryFee;

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
            <div className='flex justify-between'>
                <p>Subtotal</p>
                <p>{currency} {displaySubtotal}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <p>Shipping Fee</p>
                <p>{currency} {displayDeliveryFee}.00</p>
            </div>
            <hr />
            <div className='flex justify-between'>
                <b>Total</b>
                <b>{currency} {subtotal === 0 ? 0 : displayTotal}.00</b>
            </div>
      </div>
    </div>
  )
}

export default CartTotal


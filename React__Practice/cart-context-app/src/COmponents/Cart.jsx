import React from 'react'
import useCart from '../hooks/useCart'

function Cart() {
  const { cart,total,incress,dicress } = useCart()
  console.log(cart)
  return (
    <>
    {
      cart.map((cartitem) =>(
         <div className='bg-light d-flex flex-column justify-content-center align-items-center border border-3 border-danger rounded-3 p-3 w-25  ' key={cartitem.id}>
        <h4>{cartitem.name}</h4>
        <h4>{cartitem.price}</h4>
        <h5>Quntity : {cartitem.quntity}</h5>
       <div className='d-flex gap-3' >
         <button className='btn btn-outline-success'onClick={() => incress(cartitem)} >+</button>
        <button className='btn btn-outline-danger'
          onClick={() => dicress(cartitem)}
        >-</button>
       </div>
    </div>
      ))
    }

    <h1 className='text-light'>Your Total Bill : {total} </h1>
    </>
  )
}

export default Cart
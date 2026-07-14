import React from 'react'

function ProductCard({product}) {
    
  return (
    <div className='card h-100 shadow-sm' >
        <img src={product.thumbnail} className='card-img-top' alt="productimg" 
            style={{ height: "220px", objectFit: "cover" }}
        />

        <div className='card-body'>
            <h5>{product.title}</h5>

            <p className='text-success fw-bold'>{product.price}</p>

             <p>
          ⭐ {product.rating}
        </p>

         <button className="btn btn-primary w-100">
          Add To Cart
        </button>
        </div>
    </div>
  )
}

export default ProductCard
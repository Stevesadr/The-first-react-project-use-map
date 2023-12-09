import React from 'react'

const ProductCard = ({name , price , src}) => {
   
  return (
    <div className='card-all'>
      <div className='card'>
        <div className='for-img'>
            <img src={src} alt="test" />
        </div>
        <h1 className='product_name' >{name }</h1>
        <h3 className='product_price'>{price + "$"}</h3>
        <button>Buy</button>
      </div>
    </div>



  )
}

export default ProductCard
import React from 'react'
import Item from './popularProduct/Item'
import './productshow.scss'

const ProductShowHome = () => {
  return (
    <div className="products-container">
        <div className="sec-heading">POPULAR PRODUCTS</div>
        <div className='innerPage'>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
            <Item/>
        </div>
    </div>
  )
}

export default ProductShowHome
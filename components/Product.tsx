import * as React from 'react'
import { useState } from 'react'

import { Product } from '../interfaces'

type ProductProps = {
  item: Product,
  handleUpdateAmount:(
      title: string, 
      price: number, 
      operator:boolean ) => void; 
}

const Product = ({ item: product, handleUpdateAmount }: ProductProps) => {
  
  const [ reduce, setReduce ] = useState(false)

  const updateCart = () => {
    handleUpdateAmount(product.title, product.price, reduce)
    setReduce(!reduce)
  }

  return(
    <li>
      <p>{ product.title }</p>
      <p>{ product.price }</p>
      {
        !reduce ? 
        <button  onClick={ () => updateCart()} >Add to Cart</button>
        : <button  onClick={ () => updateCart()} >Remove to Cart</button>
      }
    </li>
  )

}

export default Product

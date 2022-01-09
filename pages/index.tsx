import Link from 'next/link'
import Layout from '../components/Layout'
import { useState } from 'react'
import Product from '../components/Product'


const IndexPage = ({products}) => {

  const [ amount, setAmount ] = useState(0)
  const [ cart, setCart ] = useState([])
  
  const handleAddToCart = (title: string, price: number, operator: boolean) => {
    !operator ? setAmount(amount + price) : setAmount(amount - price)

    if(!operator){
      setCart([...cart,title])
    } else {
      setCart(cart.filter((item) => item != title ))
    }

  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
      <div>
        <h4>Cart</h4>
        {cart.map((item, i) => (
          <li key={i} > {item} </li>
        ))}
        <p>Total price = {amount}</p>
      </div>
      <ul>
        {
          products.map((p, i) => (
            <Product 
              key={i} 
              item={p}
              handleUpdateAmount={ (title, price,operator) => handleAddToCart(title, price,operator)}/>
            // <li key={i} >
            //   <p>{ p.title }</p>
            //   <p>{ p.price }</p>
            //   {
            //     !reduce ? 
            //     <button  onClick={ () => handleAddToCart(p.price)} >Add to Cart</button>
            //     : <button  onClick={ () => handleRemoveToCart(p.price)} >Remove to Cart</button>
            //   }
            // </li>
          ))
        }
      </ul>
      
    </Layout>
  )
}

export default IndexPage

export async function getStaticProps() {
  const res = await fetch(`https://fakestoreapi.com/products`)
  const products = await res.json()

  return {
    props: { products },
    revalidate: 1,
  }
}
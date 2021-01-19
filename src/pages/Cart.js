import React from 'react'
import Hero from '../components/Hero'
import CartPage from '../components/cartPage/CartPage'
import cartImg from '../images/storeBcg.jpeg' 
export default function Cart() {
    return (
        <>
            <Hero img={cartImg}/>
            <CartPage />
        </>
    )
}

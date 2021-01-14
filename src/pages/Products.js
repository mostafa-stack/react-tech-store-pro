import React from 'react'
import productsImg from '../images/productsBcg.jpeg'
import Hero from '../components/Hero'
import OurProducts from '../components/products/OurProducts'
export default function Products() {
    return (
        <>
            <Hero img={productsImg} />
            <OurProducts />
        </>
    )
}

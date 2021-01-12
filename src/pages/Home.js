import React from 'react'
import Hero from '../components/Hero'
import img from '../images/mainBcg.jpeg'
import {Link}from 'react-router-dom'
import Services from '../components/HomePage/Services'
import Featured from '../components/HomePage/Featured'
export default function Home() {
    return (
        <>
            <Hero title='awesome gadgets' img={img} fullHeight >
                <Link to='/products' className='main-link mt-5'>our products</Link>
            </Hero>
            <Services />
            <Featured />
        </>
    )
}

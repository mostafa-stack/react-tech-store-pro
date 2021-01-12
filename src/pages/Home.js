import React from 'react'
import Hero from '../components/Hero'
import img from '../images/mainBcg.jpeg'
import {Link}from 'react-router-dom'
export default function Home() {
    return (
        <div>
            <Hero title='awesome gadgets' img={img} fullHeight >
                <Link to='/products' className='main-link mt-5'>our products</Link>
            </Hero>
        </div>
    )
}

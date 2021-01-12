import React from 'react'
import Hero from '../components/Hero'
import {Link} from 'react-router-dom'
import img from '../images/defaultBcg.jpeg'
export default function Default() {
    return (
        <Hero title='404' img={img} fullHeight>
            <h2 className='title'>page not found</h2>
            <Link to='/' className='main-link mt-5'>return home</Link>
        </Hero>
    )
}

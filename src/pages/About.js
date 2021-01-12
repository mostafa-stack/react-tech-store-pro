import React from 'react'
import aboutImg from '../images/aboutBcg.jpeg'
import Hero from '../components/Hero'
import Info from '../components/AboutPage/Info'
export default function About() {
    return (
        <>
            <Hero img={aboutImg} />
            <Info />
        </>
    )
}

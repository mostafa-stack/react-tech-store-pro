import React from 'react'
import ContactUs from '../components/contactPage/ContactUs'
import Hero from '../components/Hero'
import contactImg from '../images/contactBcg.jpeg'
export default function Cart() {
    return (
        <>
            <Hero img={contactImg} />
            <ContactUs />
        </>
    )
}

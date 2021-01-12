import React from 'react'
import {ProductConsumer } from '../context'
import styled from 'styled-components'
export default function Footer() {
    return (
        <ProductConsumer>{
            value=>{
                const {socialIcons}=value
                return (
                    <FooterWrapper >
                        <div className="container py-3">
                            <div className="row">
                                <div className="col-12 col-md-6 py-2 text-white text-capitalize">
                                    <p>
                                        copyright &copy; tech store {new Date().getFullYear()}. all rights reserved
                                    </p>
                                </div>
                                <div className="col-12 col-md-6 py-2 d-flex justify-content-around">
                                    {socialIcons.map(item=>{
                                        return (
                                            <a href={item.url} key={item.id}>{item.icon}</a>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </FooterWrapper>
                )
            }
            }
        </ProductConsumer>
    )
}
const FooterWrapper = styled.footer`
background-color:var(--darkGrey);
.icon{
    color:var(--mainWhite);
    cursor:pointer;
    transition:var(--mainTransition);
    font-size:1.2rem;
}
.icon:hover{
    color:var(--primaryColor)
}
@media(max-width:768px){
    text-align:center;
}
`
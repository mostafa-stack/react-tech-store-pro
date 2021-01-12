import React from 'react'
import styled from 'styled-components'
import {ProductConsumer } from '../context'
export default function SideCart() {
    return (
        <ProductConsumer>
            {value=>{
            const {cartOpen , closeCart} = value
            return(
                <CartWrapper show={cartOpen} onClick={closeCart}>
                    <p>you are in cart</p>
                </CartWrapper>
            )
            }
        }
        </ProductConsumer>
    )
}
const CartWrapper = styled.div`
width:100%;
border-left:3px solid var(--primaryColor);
position:fixed;
right:0;
top:60.88px;
height:100%;
z-index:1;
background-color:var(--mainGrey);
transition:var(--mainTransition);
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};

@media(min-width:567px){
    width:18rem;
}
`
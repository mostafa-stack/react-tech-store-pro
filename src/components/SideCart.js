import React from 'react'
import styled from 'styled-components'
import {ProductConsumer } from '../context'
import CartProducts from './CartProducts'
import {Link } from 'react-router-dom'
export default function SideCart() {
    return (
        <ProductConsumer>
            {value=>{
            const {cartOpen , closeCart , cartProducts , totals} = value
            return(
                <CartWrapper show={cartOpen} onClick={closeCart}>
                    {cartProducts.map(item=><CartProducts item={item} key={item.id} />)}
                        <h4 className='text-capitalize text-primary text-center ' >
                            cart Total : ${totals}
                        </h4>
                        <div className="text-center my-5">
                            <Link to='/cart' className='main-link' >to cart</Link>
                        </div>
                        
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
padding:1rem 1rem 3rem;
position:fixed;
right:0;
top:60.88px;
height:100%;
z-index:999;
overflow:scroll;
background-color:var(--mainGrey);
transition:var(--mainTransition);
transform:${props=>props.show?'translateX(0)':'translateX(100%)'};

@media(min-width:567px){
    width:18rem;
}
`
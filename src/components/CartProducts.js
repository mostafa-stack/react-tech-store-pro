import React from 'react'
import styled from 'styled-components'
export default function CartProducts(props) {
    const {image , title ,count} = props.item
    return (
        <CartProductsWrapper>
            <img src={`../${image}`} alt={title} className='img-logo'/>
            <p className='text-capitalize'>{title}</p>
            <div className="product-amount">
                <span>amount : </span>
                <span>{count}</span>
            </div>
        </CartProductsWrapper>
    )
}
const CartProductsWrapper = styled.div`
margin-bottom:1rem;
.img-logo{
    width:3rem;
    margin:1rem 0 ;
}
.product-amount{
    font-weight:bold
}
`
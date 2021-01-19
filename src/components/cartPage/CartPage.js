import React from 'react'
import Title from '../Title'
import {ProductConsumer } from '../../context'
import CartItem from './CartItem'
import styled from 'styled-components'
export default function CartPage() {
    return (
        <section className='p-5'>
            <Title center='true' text='your cart items' />
            <div className="cart-products">
                <ProductConsumer>{
                    value=>{
                    const {cartProducts , 
                        incrementProduct, 
                        decrementProduct , 
                        removeProduct ,
                        clearCart,
                        tax,
                        totals,
                        subTotal} =value;
                    if (cartProducts.length === 0) {
                        return <h1 className="text-title text-capitalize my-4 text-center">
                            your cart is currently empty
                        </h1>
                    }
                    return <>
                                <CartWrapper>
                                    {cartProducts.map(item=><CartItem 
                                    key={item.id} 
                                    item={item}
                                    incrementProduct={incrementProduct}
                                    decrementProduct={decrementProduct}
                                    removeProduct={removeProduct} />)}
                                </CartWrapper>
                                <div className="totals-info text-capitalize text-center my-5">
                                    <button className= " btn btn-outline-danger mb-3"
                                    onClick={clearCart}>clear cart</button>
                                    <h3>subtotal : ${subTotal} </h3>
                                    <h3>tax : ${tax} </h3>
                                    <h3>total : ${totals} </h3>
                                </div>
                            </>
                }}
                </ProductConsumer>
            </div>
            
        </section>
    )
}

const CartWrapper = styled.div`
display:flex;
flex-wrap:wrap;
justify-content:flex-start;

`
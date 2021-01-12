import React from 'react'
import Title from '../Title'
import {ProductConsumer} from '../../context'
import styled from 'styled-components'
import Product from '../Product'
export default function featured() {
    return (
        <ProductConsumer>
            {
                value=>{
                    const {featuredProducts , loading}= value;
                    return (
                        <FeaturedWrapper className='my-5'>
                            <Title center='true' text='featured products' />
                            <div className="container my-3 product-box">
                                {
                                loading===false?
                                featuredProducts.map(item=> <Product item={item} key={item.id} />) 
                                : null
                                }
                            </div>
                            
                            
                        </FeaturedWrapper>
                    )
                }
            }
        </ProductConsumer>
    )
}
const FeaturedWrapper = styled.section`
.product-box{
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
}
`
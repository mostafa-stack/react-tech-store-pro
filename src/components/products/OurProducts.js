import React from 'react'
import styled from 'styled-components'
import Title  from '../Title'
import {ProductConsumer} from '../../context'
import Product from '../Product'
export default function OurProducts() {
    return (
        <OurProductsWrapper className='my-5'>
            <Title text='our products' center='true' />
            <ProductConsumer>
                {
                    value=>{
                        const{storeProducts ,loading} = value;
            return(
            <div className="our-products my-5">
                {loading===false ?
                storeProducts.map(item=> <Product item={item} key={item.id} />)
                :
                null
                }
            </div>
            )
        }
                }
            </ProductConsumer>
        </OurProductsWrapper>
    )
}
const OurProductsWrapper = styled.section`
.our-products{
    display:flex;
    justify-content:space-around;
    flex-wrap:wrap;
}
`
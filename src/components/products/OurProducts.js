import React from 'react'
import styled from 'styled-components'
import Title  from '../Title'
import {ProductConsumer} from '../../context'
import Product from '../Product'
import ProductsFiltering from './ProductsFiltering'
export default function OurProducts() {
    return (
        <OurProductsWrapper className='my-5'>
            <Title text='our products' center='true' />
            <ProductConsumer>
                {
                    value=>{
                        const{filteredProducts,
                                loading,
                                handleChange,
                                min,
                                max,
                                price,
                                storeProducts,
                        }= value;
            return(<>
            <ProductsFiltering handleChange={handleChange}  
                                storeProducts = {storeProducts}
                                min={min}
                                max={max}
                                price={price}
            />
            <div className="our-products my-5">
                {loading===false ?
                filteredProducts.length>0 ?
                filteredProducts.map(item=> <Product item={item} 
                    key={item.id} 
                    />):
                    <h3 className="text-title">sorry ... no products match</h3>
                :
                <h3 className="text-title">loading...</h3>
                }
            </div>
            </>)
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
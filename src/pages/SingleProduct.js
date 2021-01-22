import React from 'react'
import Hero from '../components/Hero'
import  singleProduct from '../images/singleProductBcg.jpeg'
import {ProductConsumer} from '../context'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
export default function SingleProduct() {
    return (
        <>
            <Hero img={singleProduct} />
            <ProductConsumer>{
                value=>{
                    const {singleProduct , addToCart} = value;
                    const {image , price , title , company , description , id} = singleProduct
                    return <div className="container ">
                        <SingleProductWrapper>
                            <div className="product-img">
                            <img src={image} alt={title}/>
                            </div>
                            <div className="some-info " >
                                <div className='text-capitalize text-title model'>
                                    <span>model : </span>
                                    <span>{title}</span>
                                </div>
                                <div className='company'>
                                    <span>company : </span>
                                    <span>{company}</span>
                                </div>
                                <div className='price'>
                                    <span>price : </span>
                                    <span>${price}</span>
                                </div>
                                <div>
                                    <p className='font-weight-bold my-3'>some product info : </p>
                                    <p className='desc'>{description}</p>
                                </div>
                                <div className="options  mx-2 ">
                                    <button className="main-link m-3" onClick= {()=> addToCart(id)}>add to cart</button>
                                    <div ><Link to='/products' className='main-link m-3'>to products</Link></div>
                                        
                                </div>
                            </div>
                        </SingleProductWrapper>
                        
                    </div> 
                }}
            </ProductConsumer>
        </>
    )
}
const SingleProductWrapper = styled.section`
display:flex;
flex-wrap:wrap;
justify-content:center;
align-items:center;
.product-img ,.some-info{
    width:100%;
    margin:2rem auto
}
img{    display:block;

    width:90%;
}
@media screen and (min-width :567px){
    .product-img,.some-info{
        width:80%;
    }
}
@media screen and (min-width :768px){
    .product-img,.some-info{
        width:60%;
    }
}

@media screen and (min-width :910px){
    .product-img{
        width:40%;
        margin:2rem;
    }
    .some-info{
        width:45%;
        margin:2rem;
    }
}
.model{
    letter-spacing:var(--mainSpacing);
    font-weight:900;
}
.company{
    text-transform:capitalize;
    color:var(--darkGrey);
    font-size:1.2rem;
    margin:1rem 0;
}
.price{
    color:var(--primaryColor);
    font-size:1.2rem;
    text-transform:capitalize;

}
.desc{
    color:var(--darkGrey);
    font-size:.9rem;
}
.options{
    display:flex;
    flex-wrap:wrap
    /* margin:1rem; */
}
`
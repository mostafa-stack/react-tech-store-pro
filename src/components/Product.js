import React from 'react'
import styled from 'styled-components'
import { FaSearch, FaCartPlus } from "react-icons/fa";
import {Link } from 'react-router-dom'
export default function Product(props) {
    const {image , price ,title , id } = props.item
    return (
        <ProductWrapper >
            <div className="layer">
                <Link to ={'/products/'+id} className="product-link"><FaSearch /></Link>
                <div className="product-link"><FaCartPlus /></div>
            </div>
            <img src={image} alt={title}/>
            <div className="product-info">
                <span className='title'>{title}</span>
                <span className='price'>${price}</span>
            </div>
        </ProductWrapper>
    )
}
const ProductWrapper=styled.div`
position:relative;
width:80%;
margin:1rem;
border:1px solid #b3b3b3;
border-radius:3px;
box-shadow: 5px 5px 5px rgba(0,0,0,.3);
overflow:hidden;
    transition:var(--mainTransition);

img{
    width:100%;
    display:block;
    transform:scale(.7);
    transition:var(--mainTransition);
}
:hover img{
    transform:scale(.8)
}
:hover{
    box-shadow: 7px 8px 5px rgba(0,0,0,.6);
}
.product-info{
    padding:1.5rem .5rem;  
    display:flex;
    align-items:center;
    justify-content:space-between;
}
.title{
    text-transform:capitalize;
}
.price{
    color:var(--primaryColor)
}
.layer{
    height:100%;
    width:100%;
    position:absolute;
    top:0;
    left:0;
    z-index:1;
    background-color:rgba(255,255,255,.5);
    display:flex;
    justify-content:center;
    align-items:center;
    opacity:0;
    transition:var(--mainTransition)
}
.layer:hover{
    opacity:1;
}
.product-link{
    color:var(--primaryColor);
    background-color:var(--darkGrey);
    padding:.3rem .5rem ;
    border-radius:3px;
    margin:.5rem;
    font-size:1.3rem;
    cursor:pointer;
}
@media screen and (min-width:567px){
    width:40%;
}

@media screen and (min-width:768px){
    width:31%;
}

@media screen and (min-width:1024px){
    width:27%;
}
`
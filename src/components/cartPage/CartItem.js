import React from 'react'
import {FaPlusSquare , FaMinusSquare ,FaTrash} from 'react-icons/fa'
import styled from 'styled-components'
export default function CartItem(props) {
    const { incrementProduct , decrementProduct ,removeProduct} = props;
const {image , title ,price , count , total , id} = props.item
    return (
        <CartItemWrapper>
            <div className="img">
                <img src={image} alt={title}/>
            </div>
            <div className="product-desc pt-2">
                <p>product : {title}</p>
                <p className='font-weight-bold'>price : ${price}</p>
                <p>amount : {count}</p>
                <p className='text-muted'>total price : ${total}</p>
            </div>
            <div className="product-icons">
                <FaPlusSquare className='product-icon plus text-primary'onClick={()=>incrementProduct(id)}/>
                <FaMinusSquare className='product-icon minus text-primary'onClick={()=>decrementProduct(id)}/>
                <FaTrash className='product-icon delete text-danger' onClick={()=>removeProduct(id)}/>
            </div>
        </CartItemWrapper>
    )
}
const CartItemWrapper = styled.div`
width:100%;
text-align:center;
margin:2rem auto;
padding:.5rem;
border-bottom:1px solid var(--darkGrey);
position:relative;
.img img{
    width:5rem;
}
.product-icons{
    font-size:1.2rem;
    cursor:pointer;
    padding:1rem 0;
}
.plus{
    position:absolute;
    bottom:4px;
    left:2rem;
}
.minus{
    position:absolute;
    bottom:4px;
    left:.5rem;
    
}
.delete{
    position:absolute;
    bottom:4px;
    right:.5rem;

}
@media screen and (min-width : 650px){
    text-align:left;
    border-bottom:none;
    border-right:4px solid var(--darkGrey);
    display:flex;
    .img img{
    width:8rem;
    margin:0;
}
.product-desc{
    padding-left:1rem;
}
.plus{
    top:0;
    left: calc(100% - 4rem);
}
.minus{
    position:absolute;
    top:0;
    left:calc(100% - 2.5rem);
    
}

.delete{
    position:absolute;
    bottom:4px;
    right:1rem;

}
}
@media screen and (min-width : 990px){
    width:60%;
    margin:2rem auto;

}
`
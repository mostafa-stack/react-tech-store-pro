import React from 'react'
import styled from 'styled-components'
import {FaBars , FaCartPlus} from 'react-icons/fa'
import {ProductConsumer} from '../context'
import logo from '../images/logo.svg'
export default function Navbar() {
    return (
        <ProductConsumer>
            {
                value=>{
                    const {handleSidebar , handleSideCart , cartItems}= value 
                return(
                    <NavWrapper>
                        <div className="nav-center">
                            <FaBars className='nav-icon' onClick = {handleSidebar} />
                            <img src={logo} alt="tech store logo"/>
                            <div className="nav-cart">
                                <FaCartPlus  className='nav-icon' onClick = {handleSideCart} />
                                <span className="cart-items">{cartItems}</span>
                            </div>
                        </div>
                    </NavWrapper>
                )
                }
            }
        </ProductConsumer>
    )
}

const NavWrapper = styled.nav`
    background-color:var(--mainGrey);
    border-bottom:3px solid var(--primaryColor);
    padding:1rem 1.5rem;
    position:sticky;
    top:0;
    width:100%;
    z-index:1;
    .nav-center{
    display:flex;
    align-items:center;
    justify-content:space-between;
    margin:0 auto;
    
    }
    
    .nav-icon{
        font-size:1.5rem;
        cursor:pointer;
    }
    .nav-cart{
        position:relative;

    }
    .cart-items{
        position:absolute;
        top:-7px;
        right:-10px;
        background-color:var(--primaryColor);
        color:var(--mainWhite);
        padding:.3rem;
        line-height:.6rem;
        text-align:center;
        border-radius:50%;
        font-size:.8rem;
    }
`
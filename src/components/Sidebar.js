import React from 'react'
import styled from 'styled-components'
import {ProductConsumer } from '../context'
import {Link} from 'react-router-dom'
export default function Sidebar() {
    return (
        <ProductConsumer>
            {value=>{
            const {sidebarOpen , links} = value
            return (
                <SidebarWrapper show = {sidebarOpen}>
                    <ul>
                        {links.map(item =>{
                            return <li key={item.id}>
                            <Link to={item.path} className='nav-link'>{item.text} 
                            </Link>
                        </li>
                    })}
                    </ul>
                    
                </SidebarWrapper>
            )}
            }
        </ProductConsumer>
    )
}

const SidebarWrapper =styled.nav`
width:100%;
border-right:3px solid var(--primaryColor);
position:fixed;
left:0;
top:60.88px;
height:100%;
z-index:999;
background-color:var(--mainGrey);
transition:var(--mainTransition);
transform:${props=>props.show?'translateX(0)':'translateX(-100%)'};
ul{
    list-style-type:none;
    padding:0;
}
li{
    width:100%;
    padding:.5rem 1.5rem;
    transition:var(--mainTransition);
    background-color:var(--mainGrey)
}
li:hover{
    background-color:var(--primaryColor);
    
}
li:hover a{
    transform:translateX(20px);
    color:var(--mainWhite)
}
.nav-link{
    color:var(--mainBlack);
    text-transform:capitalize;
    font-size:1.1rem;
    transition:var(--mainTransition);
    
}
@media(min-width:567px){
    width:18rem;
}
`
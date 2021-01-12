import React from 'react'
import styled from 'styled-components'
import mainBcg from '../images/mainBcg.jpeg'
export default function Hero(props) {
    const {title , children , img ,fullHeight} = props;
    return (
        <HeroWrapper img={img} fullHeight={fullHeight}>
            <h2 className='title'>{title}</h2>
            {children}
        </HeroWrapper>
    )
}

const HeroWrapper = styled.div`
background:linear-gradient(var(--primaryRGBA),var(--primaryRGBA)) , url(${props=> props.img?props.img : mainBcg}) no-repeat center/cover ;
min-height:${props=> props.fullHeight?'100vh' : '60vh'};
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
text-align:center;
.title{
color:var(--mainWhite);
text-transform:uppercase;
letter-spacing:var(--mainSpacing);
text-shadow: 3px 3px var(--primaryRGBA);
font-size:2.2rem;
font-weight:bold;
}

`
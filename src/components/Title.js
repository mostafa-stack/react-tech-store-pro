import React from 'react'
import styled from 'styled-components'
export default function Title(props) {
const {text , center} = props
    return (
        <TitleWrapper  center={center}>
            <h2 className='text-title'>{text}</h2>
            <div className="under-line" center={center}></div>
        </TitleWrapper>
    )
}
const TitleWrapper  =styled.div`
text-align:${props=> props.center? 'center':'left'};
.under-line{
height:4px;
width:7rem;
background-color:var(--primaryColor);
margin:${props=> props.center ? '0 auto' : '0'}
}
`
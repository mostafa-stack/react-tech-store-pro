import React from 'react'
import Title from '../Title'
import styled from 'styled-components'
import aboutImg from '../../images/aboutBcg.jpeg'
export default function inf() {
    return (
        <InfoWrapper className="container">
            <div className="row">
                <div className="col-sm-10 col-md-6  my-5 ">
                    <img src={aboutImg} className='about-img img-fluid img-thumbnail ' alt=""/>
                </div>
                <div className="col-sm-10 col-md-6 my-5">
                    <Title text='about us'/>
                    <p className='my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni soluta laborum excepturi! Sapiente eveniet tenetur delectus nisi temporibus harum magni, vel mollitia eaque nostrum at, veniam neque nihil numquam sequi?</p>
                    <button className="main-link">more info</button>
                </div>
            </div>
        </InfoWrapper>
    )
}
const InfoWrapper = styled.div`
margin:2rem 0;
.about-img{
    background-color:var(--darkGrey)

}
`
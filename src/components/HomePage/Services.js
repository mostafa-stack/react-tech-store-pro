import React, { Component } from 'react';
import {FaDolly , FaDollarSign , FaRedo} from 'react-icons/fa';
import styled from 'styled-components'
class Services extends Component {
    state={
        services:[
            {
            id:0,
            icon:<FaDolly className='icon'/>,
            title:'free shipping',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, doloremque!'
        },
        {
            id:1,
            icon:<FaRedo className='icon'/>,
            title:'30 days return policy',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, doloremque!'
        },
        {
            id:2,
            icon:<FaDollarSign className='icon'/>,
            title:'secured payment',
            text:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, doloremque!'
        },
    ]
    }
    render() {
        return (
            <ServicesWrapper>
                <div className="container py-3">
                    <div className="row py-3">
                        {this.state.services.map(item=>{
                            return(
                                <div className="col-12 col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                    {item.icon}
                                    <h5 className='service-title text-capitalize my-3'>{item.title}</h5>
                                    <p className='service-text'>{item.text}</p>
                                </div>
                            )
                        })}
                        
                    </div>
                </div>
            </ServicesWrapper>
        );
    }
}
const ServicesWrapper = styled.section`
background-color:rgba(95,183,234,.5);
.icon{
    color:var(--primaryColor);
    font-size:2.3rem;

}
.service-text{
    color:var(--darkGrey)
}
`
export default Services;

import React from 'react'
import styled from 'styled-components' 
export default function ProductsFiltering(props) {
    const {handleChange , min , max , price , storeProducts} = props
    const allCompanies = new Set(...[storeProducts.map(item=>item.company)])
    const sortedCompanies = ['all' , ...allCompanies]
    return (
            <FilterWrapper>
                <div className="form-group ">
                    <label htmlFor="searchProduct">
                        search products
                    </label>
                    <input 
                    type="text" 
                    name="title" 
                    id="searchProduct" 
                    onInput={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="company">
                        company
                    </label>
                    <select name="company" 
                    id="company"
                    onChange={handleChange} >
                        {sortedCompanies.map((item , index)=> <option key={index} value={item}>{item}</option>)}
                    </select>
                </div>
                
                <div className="form-group">
                    <label htmlFor="priceRange">
                        product price : {price}
                    </label>
                    <input 
                    type="range" id="priceRange" name="price" 
                    min={min} 
                    max={max} 
                    value={price}
                    onChange={handleChange}
                    />
                </div>
            </FilterWrapper>
    )
}
const FilterWrapper  = styled.div`

margin-top:3rem;
.form-group{
    text-align:center;
}
label{
    display:block;
    font-weight:bold;
}
@media (min-width:400px){
    display:flex;
    flex-wrap:wrap;
    justify-content:center;
    .form-group{
        margin:2rem;
    }
}
`
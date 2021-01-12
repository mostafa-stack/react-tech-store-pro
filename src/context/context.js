import React, { Component } from 'react';
import {navLinks} from './navLinks'
import {SocialIcons} from './socialIcons'
import {items} from './productData'
const ProductContext = React.createContext()
class ProductProvider extends Component {
    state = {
        sidebarOpen : false ,
        cartOpen:false,
        cartItems : 0,
        links :navLinks,
        socialIcons:SocialIcons,
        storeProducts:[],
        featuredProducts:[],
        loading:true,
    };

//did mount
componentDidMount(){
    this.setProducts(items)
}
//set products
setProducts(products){
    const storeProducts = products.map(item=>{
        let product= {
            ...item.sys,
            ...item.fields,
            image:item.fields.image.fields.file.url,
        }
        return product
    })
    const featuredProducts = storeProducts.filter(item=>item.featured===true)
    console.log(featuredProducts);
    this.setState({
        storeProducts,
        featuredProducts,
        loading:false,
    })
}

    handleSidebar =()=>{
        this.setState({
            sidebarOpen:!this.state.sidebarOpen
        })
    };
    handleSideCart =()=>{
        this.setState({
            cartOpen:!this.state.cartOpen
        })
    }
    closeCart =()=>{
        this.setState({
            cartOpen : false
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar : this.handleSidebar,
                handleSideCart :this.handleSideCart,
                closeCart : this.closeCart,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider , ProductConsumer};

import React, { Component } from 'react';
import {navLinks} from './navLinks'
const ProductContext = React.createContext()
class ProductProvider extends Component {
    state = {
        sidebarOpen : false ,
        cartOpen:false,
        cartItems : 0,
        links :navLinks,
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

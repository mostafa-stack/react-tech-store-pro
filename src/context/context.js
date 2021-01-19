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
        cartProducts:[],
        subTotal:0,
        tax:0,
        totals:0,
        singleProduct:{},
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
    this.setState({
        storeProducts,
        featuredProducts,
        loading:false,
        cartProducts:this.getStorageProducts(),
        singleProduct:this.getSingleProduct(),
    } , ()=>{
        this.addTotals();
        
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
    openCart = ()=>{
        this.setState({
            cartOpen: true
        })
    }
    getTotals = ()=>{
        let subTotal = 0;
        let cartItems = 0;
        this.state.cartProducts.forEach(item=>{
            subTotal+= item.total;
            cartItems += item.count;
        })
        subTotal = parseFloat(subTotal.toFixed(2))
        let tax = .2 * subTotal ;
        let totals = subTotal + tax ; 
        return {
            subTotal , 
            tax , 
            totals,
            cartItems
        }
    }
    addTotals = ()=>{
        let cartTotals = this.getTotals()
        this.setState({
            subTotal: cartTotals.subTotal,
            tax : cartTotals.tax,
            totals: cartTotals.totals,
            cartItems : cartTotals.cartItems,
        })
    }
    synStorage = ()=>{
        localStorage.setItem('cart' , JSON.stringify(this.state.cartProducts))
    }
    getStorageProducts = ()=>{
        let cart ;
        if (localStorage.getItem('cart')) {
            cart = JSON.parse(localStorage.getItem('cart'))
        } else {
            cart = []
        }
        return cart
    }
    setSingleProduct =(id)=>{
        let singleProduct = this.state.storeProducts.find(item=>item.id === id)
        localStorage.setItem('singleProduct' ,JSON.stringify(singleProduct) )
        this.setState({
            singleProduct,
            loading:false,
        },()=>{
            this.getSingleProduct()
        })
    }
    getSingleProduct=()=>{
        let singlePageProduct
        if (localStorage.getItem('singleProduct')) {
            singlePageProduct = JSON.parse(localStorage.getItem('singleProduct'))
        } else {
            singlePageProduct = {};
        }
        return singlePageProduct
    }
    addToCart=(id)=>{
        let tempCart = this.state.cartProducts;
        let addedProduct = tempCart.find(item=> item.id === id);
        if (!addedProduct) {
            addedProduct = this.state.storeProducts.find(item => item.id === id);
            let total = addedProduct.price;
            let cartItem =  {...addedProduct , count:1 , total}
            tempCart = [...this.state.cartProducts ,cartItem]
        } else {
            addedProduct.count++;
            addedProduct.total = (addedProduct.price*addedProduct.count);
        }
        this.setState({
            cartProducts: [...tempCart],
        } , 
        ()=>{
            this.openCart();
            this.addTotals();
            this.synStorage();
        }
        )
    }
    incrementProduct = (id)=>{
        let tempCart = this.state.cartProducts;
        let addedProduct = tempCart.find(item=> item.id === id);
            addedProduct.count++;
            addedProduct.total = (addedProduct.price*addedProduct.count);
        this.setState({
            cartProducts: [...tempCart],
        } , 
        ()=>{
            this.addTotals();
            this.synStorage();
        }
        )
    }
    decrementProduct = (id)=>{
        let tempCart = this.state.cartProducts;
        let addedProduct = tempCart.find(item=> item.id === id);
        if (addedProduct.count>1) {
            addedProduct.count--;
            addedProduct.total = (addedProduct.price*addedProduct.count);
        this.setState({
            cartProducts: [...tempCart],
        } , 
        ()=>{
            this.addTotals();
            this.synStorage();
        }
        )
        } else {
            this.removeProduct(id)
        }
            
    }
    removeProduct = (id)=>{
        let tempCart = this.state.cartProducts.filter(item=> item.id !==id);
        this.setState({
            cartProducts: [...tempCart],
        } , 
        ()=>{
            this.addTotals();
            this.synStorage();
        }
        )
    }
    clearCart = ()=>{
        this.setState({
            cartProducts: []
        }, 
        ()=>{
            this.addTotals();
            this.synStorage();
        })
    }
    render() {
        return (
            <ProductContext.Provider value={{
                ...this.state,
                handleSidebar : this.handleSidebar,
                handleSideCart :this.handleSideCart,
                closeCart : this.closeCart,
                addToCart : this.addToCart,
                setSingleProduct : this.setSingleProduct,
                incrementProduct:this.incrementProduct,
                decrementProduct:this.decrementProduct,
                removeProduct:this.removeProduct,
                clearCart:this.clearCart,
                
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider , ProductConsumer};

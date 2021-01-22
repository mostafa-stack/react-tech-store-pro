import React, { Component } from 'react';
import {navLinks} from './navLinks'
import {SocialIcons} from './socialIcons'
/* import {items} from './productData' */
import {client}  from './contentful'
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
        filteredProducts:[],
        loading:true,
        cartProducts:[],
        subTotal:0,
        tax:0,
        totals:0,
        singleProduct:{},
        price:0,
        min:0,
        max:0,
        freeShipping:false,
        title:'',
        company:'all',
    };

//did mount
componentDidMount(){
/*     this.setProducts(items) */

client.getEntries({
  content_type: 'techStoreProducts'
})
.then((response) => this.setProducts(response.items))
.catch(console.error)

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
    const max = Math.max(...storeProducts.map(item=>parseFloat(item.price)))
    const min = Math.min(...storeProducts.map(item=>parseFloat(item.price)))
    this.setState({
        storeProducts,
        featuredProducts,
        filteredProducts:storeProducts,
        loading:false,
        cartProducts:this.getStorageProducts(),
        singleProduct:this.getSingleProduct(),
        max,
        min,
        price:max,
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
        let tax = parseFloat((.2 * subTotal).toFixed(2)) ;
        let totals = parseFloat(subTotal + tax ); 
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
    /* filter products */
    handleChange = (event)=>{
        let target = event.target
        let value = target.value;
        let name = event.target.name;
        this.setState({
            [name]: value
        } , ()=>
        this.filterProducts()
        )
    }
    filterProducts = ()=>{
        let titledProducts
        if(this.state.title ===''){
            titledProducts = this.state.storeProducts
        }else{
            titledProducts = this.state.storeProducts.filter(item=>item.title.search(this.state.title)>-1)
        }
        /* price */
        let rangedProducts = this.state.storeProducts.filter(item=> item.price<= this.state.price)
        /* company */
        let companyProducts
        if (this.state.company === 'all') {
            companyProducts = this.state.storeProducts
        } else {
        companyProducts = this.state.storeProducts.filter(item=> item.company=== this.state.company)
        }
        // freeShipping
        
        console.log(companyProducts);
        let sortedProducts = titledProducts.filter(item=>{
            if (
                    rangedProducts.includes(item) &&
                    companyProducts.includes(item) 
            ) {
                return item
            } else {
                return false
            }
        } )
        
        
        
        this.setState({
            filteredProducts:[...sortedProducts],
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
                handleChange:this.handleChange,
            }}>
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}
const ProductConsumer = ProductContext.Consumer
export {ProductProvider , ProductConsumer};

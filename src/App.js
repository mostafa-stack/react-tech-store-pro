import React , {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import Cart from './pages/Cart'
import Default from './pages/Default'
import Contact from './pages/Contact'
import SingleProduct from './pages/SingleProduct'
import {Route , Switch} from 'react-router-dom'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import SideCart from './components/SideCart'
import Footer from './components/Footer'

class App extends Component {
  render(){
    return (
        <>
          <Navbar />
          <Sidebar />
          <SideCart />
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about'  component={About} />
            <Route path='/contact'  component={Contact} />
            <Route path='/products' exact component={Products} />
            <Route path='/cart'  component={Cart} />
            <Route path='/products/:id'  component={SingleProduct} />
            <Route  component={Default} /> 
          </Switch>
          <Footer />
      </>
    )
  }
}

export default App;

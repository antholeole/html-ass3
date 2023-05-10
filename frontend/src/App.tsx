import React from 'react';
import { Cart, Confirmation, NavigationPage, Pages, Landing, Products, SingleProduct } from './contexts/Page';
import { CartPage } from './pages/cart/Cart';
import { LandingPage } from './pages/landing/Landing';
import { ConfirmationPage } from './pages/confirmation/Confirmation';
import { ProductsPage } from './pages/products/Products';
import { SingleProductPage } from './pages/product/SingleProduct';
import { LoginModal } from './components/LoginModal';
import ToasterDisplay from './components/ToasterDisplay';
import { Route, Routes } from 'react-router';
import { NavBar } from './components/navbar/NavBar';

function App() {
  const pageContainer = Pages.useContainer();

  const switchOnPage = (page: NavigationPage): JSX.Element => {
    if (page instanceof Landing) {
      return <LandingPage />;
    } else if (page instanceof Confirmation) {
      return <ConfirmationPage form={page.form} />;
    }
    
    else {
      throw Error("unknown page subtype");
    }
  }

  return (
    <div className="App">
      <ToasterDisplay />
      <LoginModal />

      <Routes>
        <Route path='/' element={<WithNavbar><LandingPage /></WithNavbar>} />
        <Route path='/cart' element={<WithNavbar><CartPage /></WithNavbar>} />
        <Route path='/products' element={<WithNavbar><ProductsPage /></WithNavbar>} />
        <Route path='/products/:itemId' element={<WithNavbar><SingleProductPage /></WithNavbar>} />
      </Routes>
    </div>
  );
}

type WithNavbarProps = {
  children: React.ReactNode;
}

function WithNavbar(props: WithNavbarProps) {
  return (
    <div>
      <NavBar />
      {props.children}
    </div>
  )
}

export default App;

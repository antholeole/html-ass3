import React from 'react';
import { Cart, Confirmation, Home, NavigationPage, Pages, Landing, Products } from './contexts/Page';
import { Shopping } from './contexts/Shopping';
import { CartPage } from './pages/cart/Cart';
import { LandingPage } from './pages/landing/Landing';
import { ProductsPage } from './pages/products/ProductsPage';
import { ConfirmationPage } from './pages/confirmation/Confirmation';

function App() {
  const pageContainer = Pages.useContainer();

  const switchOnPage = (page: NavigationPage): JSX.Element => {
    if (page instanceof Landing) {
      return <LandingPage />;
    } else if (page instanceof Cart) {
      return <CartPage />;
    } else if (page instanceof Confirmation) {
      return <ConfirmationPage form={page.form} />;
    } else if (page instanceof Products) {
      return <ProductsPage />;
    } else {
      throw Error("unknown page subtype");
    }
  }

  return (
    <div className="App">
      {switchOnPage(pageContainer.page)}
    </div>
  );
}

export default App;

import React from 'react';
import { Cart, Confirmation, NavigationPage, Pages, Landing, Products } from './contexts/Page';
import { CartPage } from './pages/cart/Cart';
import { LandingPage } from './pages/landing/Landing';
import { ConfirmationPage } from './pages/confirmation/Confirmation';
import { ProductsPage } from './pages/products/Products';
import { LoginModal } from './components/LoginModal';
import ToasterDisplay from './components/ToasterDisplay';

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
      <ToasterDisplay />
      <LoginModal />
      {switchOnPage(pageContainer.page)}
    </div>
  );
}

export default App;

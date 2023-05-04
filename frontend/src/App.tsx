import React from 'react';
import { Cart, Confirmation, Home, NavigationPage, Pages } from './contexts/Page';
import { Shopping } from './contexts/Shopping';
import { CartPage } from './pages/cart/Cart';
import { HomePage } from './pages/home/Home';
import { ConfirmationPage } from './pages/confirmation/Confirmation';

function App() {
  const pageContainer = Pages.useContainer();

  const switchOnPage = (page: NavigationPage): JSX.Element => {
    if (page instanceof Home) {
      return <HomePage />;
    } else if (page instanceof Cart) {
      return <CartPage />;
    } else if (page instanceof Confirmation) {
      return <ConfirmationPage form={page.form} />;
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

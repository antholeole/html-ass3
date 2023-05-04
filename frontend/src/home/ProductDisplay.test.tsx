import '@testing-library/jest-dom';

import {act, cleanup, render } from '@testing-library/react';
import { ProductDisplay } from '../pages/home/ProductDisplay';
import { Item } from '../data/Item';
import { Shopping } from '../contexts/Shopping';
import React from 'react';

// Note: running cleanup afterEach is done automatically for you in @testing-library/react@9.0.0 or higher
// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

const product: Item = {
    name: "test",
    price: 1,
    image: "test",
    quantity: 1,
};

it('renders the product', async () => {
  const { findByText } = render(
    <Shopping.Provider>
      <ProductDisplay products={[product]} />
    </Shopping.Provider>,
  );

  expect(await findByText(product.name)).toBeVisible();
});

it('increments product count', async () => {
  const { findByText } = render(
    <Shopping.Provider>
      <ProductDisplay products={[product]} />
    </Shopping.Provider>,
  );

  await act(async () => {
    (await findByText('+')).click();
  });

  expect(await findByText('1')).toBeVisible();
});

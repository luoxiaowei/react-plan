import React from 'react';
import { render } from 'react-dom';
import Cart from './containers/Cart'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reduceCart from './reducers/cart'

let store = createStore(reduceCart);

let cartElement = document.getElementById('cart');

store.subscribe(() =>
    console.log(store.getState())
)

render(
    <Provider store={store}>
        <Cart />
    </Provider>,
    cartElement
);

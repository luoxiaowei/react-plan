import React, { Component, PropTypes } from 'react';
import CartItem from './CartItem';

class CartMain extends Component{
    render(){
        let{
            status,
            dispatch,
            shops
        }=this.props;
        return (
            <ul className="CartMain">
                {shops.map((shop)=>{
                    return (
                        <CartItem
                            key={shop.id}
                            status={status}
                            shop={shop}
                            dispatch={dispatch}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default CartMain;

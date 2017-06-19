
import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux'

import {getshops} from '../actions/cart'

import CartHeader from '../components/Cart/CartHeader'
import CartMain from  '../components/Cart/CartMain'
import CartFooter from  '../components/Cart/CartFooter'

class Cart extends Component{
    constructor(){
        super()
    }
    componentWillMount(){
        let oAjax = new XMLHttpRequest();
        oAjax.open('GET', require("./data/shops.json"), true);
        oAjax.send();
        oAjax.onreadystatechange = () => {
            if(oAjax.readyState==4){
                if(oAjax.status==200){
                    let data = JSON.parse(oAjax.responseText)
                    this.props.dispatch(getshops(data));
                }else{
                    console.log("报错"+oAjax.status);
                }
            }
        }
    }
    render(){
        const {dispatch,status,shops} = this.props;
        return (
            <div>
                <CartHeader
                    status={status}
                    dispatch={dispatch}
                    shopsNum={shops.length}
                />
                <CartMain
                    status={status}
                    shops={shops}
                    dispatch={dispatch}
                />
                <CartFooter
                    status={status}
                    allPrice={allPrice(shops)}
                    allCheck={allCheck(shops)}
                    dispatch={dispatch}
                />
            </div>

        )
    }
}
Cart.PropTypes={
    shops:PropTypes.array.isRequired
}


//计算总价
const allPrice = (shops) => {
    let allPrice = 0;
    for(let shop of shops){
        if(shop.hasCheck){
            allPrice += shop.num * shop.price;
        }
    }
    return allPrice;
}
//是否全选
const allCheck = (shops) => {
    let flag = true;
    for(let shop of shops){
        if(!shop.hasCheck){
            flag = false;
            break;
        }
    }
    return flag;
}

export const select = (state) => {
    return {
        status: state.status,
        shops:state.shops
    }
}
export default connect(select)(Cart);

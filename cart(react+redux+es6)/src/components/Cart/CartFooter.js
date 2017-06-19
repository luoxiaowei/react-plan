import React, { Component, PropTypes } from 'react';

import {allChecked,delChecked} from '../../actions/cart'

class CartFooter extends Component{
    constructor(){
        super();
        this.buy = this.buy.bind(this);
    }
    buy(){
        console.log("结算");
    }
    render(){
        let{
            allCheck,
            status,
            allPrice,
            dispatch
        }=this.props;

        return (
            <div className="CartFooter">
                <div><i onClick={()=>{dispatch(allChecked(!allCheck))}} className={allCheck?"checked":""}></i>全选</div>
                <div>{status?'合计：￥'+allPrice:''}</div>
                <div><a onClick={status?this.buy:()=>{dispatch(delChecked())}} href="javascript:;">{status?'结算':'删除'}</a></div>
            </div>
        )
    }
}
CartFooter.PropTypes = {
    allPrice:PropTypes.number,
    status:PropTypes.boot
}
export default CartFooter;

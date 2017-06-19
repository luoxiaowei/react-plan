import React, { Component, PropTypes } from 'react';
import { hasStatus } from '../../actions/cart'

class CartHeader extends Component{
    render(){
        let {
            shopsNum,
            status,
            dispatch
        }=this.props;
        return (
            <div className="CartHeader">
                <div>购物车({shopsNum})</div>
                <div><span onClick={()=>{dispatch(hasStatus(!status))}}>{status?'编辑':'完成'}</span></div>
            </div>
        )
    }
}
export default CartHeader;

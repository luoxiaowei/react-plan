import React, { Component, PropTypes } from 'react';
import {changeItem,delShop} from '../../actions/cart'
class CartItem extends Component{
    constructor(){
        super();
        this.hasNum = this.hasNum.bind(this);
        this.isCheck = this.isCheck.bind(this);
        this.delShop = this.delShop.bind(this);
    }
    hasNum(event){
        let $el = event.target;
        let type = $el.getAttribute("data-type");
        let shop = this.props.shop;
        if(type=="input"){
            shop.num = event.target.value;
        }else if(type=="down"){
            shop.num!=1?shop.num = parseInt(shop.num)-1:console.log("不能再减了");
        }else if(type=="add"){
            shop.num = parseInt(shop.num)+1;
        }
        this.props.dispatch(changeItem(shop))
    }
    isCheck(){
        let shop = this.props.shop;
        shop.hasCheck = !shop.hasCheck;
        this.props.dispatch(changeItem(shop))
    }
    delShop(){
        this.props.dispatch(delShop(this.props.shop.id))
    }
    render(){
        let {
            shop,
            status
        } = this.props;
        let {
            id,
            name,
            price,
            img,
            num,
            hasCheck
        } = shop;
        const item = (status) =>{
            if(status){
                return (
                    <div>
                        <p>{name}</p>
                        <p>价格：￥{price}</p>
                        <p>数量：{num}</p>
                    </div>
                )
            }else{
                return (
                    <div className="edit">
                        <p>
                            <span data-type="down" onClick={this.hasNum}>-</span>
                            <input data-type="input" onChange={this.hasNum} type="number" value={num}/>
                            <span data-type="add" onClick={this.hasNum}>+</span>
                        </p>
                        <p>
                            <a href="javascript:;" onClick={this.delShop}>删除</a>
                        </p>
                    </div>
                )
            }
        };
console.log(img)
        return (
            <li>
                <div><i onClick={this.isCheck} className={hasCheck?"checked":""}></i></div>
                <div>
                    <a href="javascript:;">
                        <img src={ require(img)} />
                    </a>
                </div>
                {item(status)}
            </li>
        )
    }

}
CartItem.PropTypes ={
    num:PropTypes.number,
    hasCheck:PropTypes.bool
}
export default CartItem;
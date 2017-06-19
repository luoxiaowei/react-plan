

class CartFooter extends React.Component{
    buy(){
        console.log("结算");
    }
    render(){
        return (
            <div className="CartFooter">
                <div><i onClick={this.props.allChecked.bind(this)} className={this.props.allCheck?"checked":""}></i>全选</div>
                <div>{this.props.status?'合计：￥'+this.props.allPrice:''}</div>
                <div><a onClick={this.props.status?this.buy.bind(this):this.props.delChecked.bind(this)} href="javascript:;">{this.props.status?'结算':'删除'}</a></div>
            </div>
        )
    }
}
export default CartFooter;


class CartHeader extends React.Component{
    render(){
        return (
            <div className="CartHeader">
                <div>购物车({this.props.shopsNum})</div>
                <div><span onClick={this.status.bind(this)}>{this.props.status?'编辑':'完成'}</span></div>
            </div>
        )
    }
    status(){
        var flag = !this.props.status;
        this.props.hasStatus(flag);
    }
}
export default CartHeader;

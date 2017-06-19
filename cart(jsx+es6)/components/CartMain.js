
import CartItem from './CartItem';

class CartMain extends React.Component{
    constructor(){
        super();
    }
    render(){
        this.delShop = this.props.delShop.bind(this);
        this.changeShop = this.props.changeShop.bind(this);
        return (
            <ul className="CartMain">
                {this.props.shops.map((shops)=>{
                    return (
                        <CartItem
                            key={shops.id}
                            shops={shops}
                            status={this.props.status}
                            delShop={this.delShop}
                            changeShop={this.changeShop}
                        />
                    )
                })}
            </ul>
        )
    }
}

export default CartMain;


import CartHeader from './CartHeader';
import CartMain from  './CartMain';
import CartFooter from  './CartFooter'

class Cart extends React.Component{
    constructor() {
        super();
        this.state = {
            status: true,
            shops: [
                {id: "s001", img: "img/a.jpg!4-4", price: 143, name: "批发透气船袜子1", num: 1, hasCheck: true},
                {id: "s002", img: "img/a.jpg!4-4", price: 32, name: "批发透气船袜子2", num: 2, hasCheck: true},
                {id: "s003", img: "img/a.jpg!4-4", price: 143, name: "批发透气船袜子3", num: 1, hasCheck: false},
                {id: "s004", img: "img/a.jpg!4-4", price: 32, name: "批发透气船袜子4", num: 2, hasCheck: true}
            ],
            allCheck: true,
            allPrice: 0
        };
        this.allChecked = this.allChecked.bind(this);
        this.allPrice = this.allPrice.bind(this);
        this.isAllCheck = this.isAllCheck.bind(this);
        this.hasStatus = this.hasStatus.bind(this);
        this.delShop = this.delShop.bind(this);
        this.delChecked = this.delChecked.bind(this);
        this.changeShop = this.changeShop.bind(this);

    }
    componentDidMount() {
        let result = this.state.shops;
        this.allPrice(result);
        for(let shop of result){
            if(!shop.hasCheck){
                this.setState({allCheck:false});
                break;
            }
        }
    }
    allChecked(){
        let flag = this.state.allCheck;
        let nextShop = this.state.shops;
        for (let shop of nextShop){
            shop.hasCheck = !flag;
        }
        this.allPrice(nextShop);
        this.setState({shops:nextShop,allCheck:!flag});

    }
    allPrice(nextShop) {
        let allPrice = 0;
        for(let shop of nextShop){
            if(shop.hasCheck){
                allPrice += shop.num * shop.price;
            }
        }
        this.setState({allPrice:allPrice});
    }
    isAllCheck(nextShop){
        let flag = true;
        for(let shop of nextShop){
            if(!shop.hasCheck){
                flag = false;
                break;
            }
        }
        this.allPrice(nextShop);
        this.setState({shops:nextShop,allCheck:flag});
    }
    hasStatus(flag){
        this.setState({status:flag});
        this.allPrice(this.state.shops);
    }
    delShop(old){
        let nextShop = this.state.shops;
        if(nextShop.indexOf(old)!=-1){
            nextShop.splice(nextShop.indexOf(old),1);
        }
        this.isAllCheck(nextShop);
    }
    delChecked(){
        let nextShop = this.state.shops;
        for(let i=0;i<nextShop.length;i++){
            if(nextShop[i].hasCheck){
                nextShop.splice(i,1);
                i--;
            }
        }
        this.isAllCheck(nextShop);
    }
    changeShop(newShop){
        let nextShop = this.state.shops;
        for(let shop of nextShop){
            if(shop.id==newShop.id){
                shop = newShop;
                break;
            }
        }
        this.isAllCheck(nextShop);
    }
    render(){
        let {
            status,
            shops,
            allCheck,
            allPrice
        } = this.state;
        return (
            <div>
                <CartHeader status={status}
                            hasStatus={this.hasStatus}
                            shopsNum={shops.length}
                />
                <CartMain status={status}
                          shops={shops}
                          changeShop={this.changeShop}
                          delShop={this.delShop}
                />
                <CartFooter status={status}
                            allCheck={allCheck}
                            allPrice={allPrice}
                            allChecked={this.allChecked}
                            delChecked={this.delChecked}
                />
            </div>

        )
    }

}

ReactDOM.render(<Cart />,document.getElementById("cart"));

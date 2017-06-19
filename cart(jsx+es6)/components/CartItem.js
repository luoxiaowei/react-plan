
class CartItem extends React.Component{
    constructor(){
        super();
        this.hasNum = this.hasNum.bind(this);
        this.downNum = this.downNum.bind(this);
        this.addNum = this.addNum.bind(this);
        this.isCheck = this.isCheck.bind(this);
        this.delShop = this.delShop.bind(this);
    }
    hasNum(event){
        var shop = this.props.shops;
        shop.num = event.target.value;
        this.props.changeShop(shop);
    }
    downNum(){
        var shop = this.props.shops;
        if(shop.num!=1){
            shop.num = parseInt(shop.num)-1;
            this.props.changeShop(shop);
        }else{
            console.log("不能再减了");
        }
    }
    addNum(){
        var shop = this.props.shops;
        shop.num = parseInt(shop.num)+1;
        this.props.changeShop(shop);
    }
    isCheck(){
        var shop = this.props.shops;
        shop.hasCheck = !shop.hasCheck;
        this.props.changeShop(shop);
    }
    delShop(){
        this.props.delShop(this.props.shops);
    }
    render(){
        let shops = this.props.shops;
        let {
            id,
            name,
            price,
            num,
            hasCheck
        } = shops;
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
                            <span onClick={this.downNum}>-</span>
                            <input onChange={this.hasNum} type="number" value={shops.num}/>
                            <span onClick={this.addNum}>+</span>
                        </p>
                        <p>
                            <a onClick={this.delShop} href="javascript:;">删除</a>
                        </p>
                    </div>
                )
            }
        };

        return (
            <li>
                <div><i onClick={this.isCheck} className={hasCheck?"checked":""}></i></div>
                <div>
                    <a href="javascript:;">
                        <img src="img/a.jpg!4-4" alt="" />
                    </a>
                </div>
                {item(this.props.status)}
            </li>
        )
    }

}
export default CartItem;

import { combineReducers } from 'redux';
import * as types from '../constants/actions/cart'

const status = (state = true, action) => {
    switch (action.type) {
        case types.HAS_STATUS:
            return action.flag
        default:
            return state
    }
};

// let arr = [
//     {id: "s001", img: "img/a.jpg!4-4", price: 143, name: "批发透气船袜子1", num: 1, hasCheck: true},
//     {id: "s002", img: "img/a.jpg!4-4", price: 32, name: "批发透气船袜子2", num: 2, hasCheck: true},
//     {id: "s003", img: "img/a.jpg!4-4", price: 143, name: "批发透气船袜子3", num: 1, hasCheck: true},
//     {id: "s004", img: "img/a.jpg!4-4", price: 32, name: "批发透气船袜子4", num: 2, hasCheck: true}
// ]

const shops = (state =[], action)=>{
    let newState=state,index=-1;
    switch(action.type){
        case types.GET_SHOPS:
            newState = action.data;
            return newState;
        case types.All_CHECKED:
            return [].concat(state.map((shop)=>{return Object.assign({},shop,{hasCheck:action.flag})}));
        case types.CHANGE_ITEM:
            let {id,num,hasCheck}=action.item;
            for(let shop of state){
                index++;
                if(shop.id==id){
                    break;
                }
            }
            return [
                ...state.slice(0,index),
                Object.assign({},state[index],{num:num,hasCheck:hasCheck}),
                ...state.slice(index+1)
            ];
        case types.DEL_ITEM:
            newState = newState.filter((item,index)=>{
                return item.id !== action.id
            });
            return newState;
        case types.DEL_CHECKED:
            newState = newState.filter((item,index)=>{
                return item.hasCheck !== true
            });
            return newState;
        default:
            return state
    }
}

const reduceCart = combineReducers({
    status,
    shops
});

export default reduceCart;
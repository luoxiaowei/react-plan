
import * as types from '../constants/actions/cart'

export const hasStatus = (flag) => {
    return { type:types.HAS_STATUS, flag }
};

export const allChecked = (flag) => {
    return { type:types.All_CHECKED, flag }
}

export const changeItem = (item) => {
    return { type:types.CHANGE_ITEM,item}
}

export const delShop = (id) => {
    return { type:types.DEL_ITEM,id}
}

export const delChecked = () => {
    return {type: types.DEL_CHECKED}
}

export const getshops = (data) => {
    return {type:types.GET_SHOPS,data}
}
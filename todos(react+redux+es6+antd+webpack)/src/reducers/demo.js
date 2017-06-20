const initState = {
    num: 0
};

const demo = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_NUMBER': {
            let number;
            if (state.num) {
                number = Number(state.num);
            } else {
                number = 0;
            }
            return {
                ...state,
                num: number + action.num
            };
        }
        default:
            return initState;
    }
};

export default demo;


export interface BaseState {
    products: string[],
    cart: string[],
    orders: string[]
}

const initialState = {
    products:[],
    cart:[],
    orders:[]
}

export const baseReducers = (state:BaseState = initialState, action:any ) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, cart: action.payload};
        case 'PRODUCTS':
            return {...state, products: action.payload};
        case 'ORDERS':
            return {...state, orders: action.payload};
        default:
            return state;
    }
    
}

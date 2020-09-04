

export interface BaseState {
    products: string[],
    cart: string[],
    orders: string[],
    header: string
}

const initialState = {
    products:[],
    cart:[],
    orders:[],
    header:""
}

export const baseReducers = (state:BaseState = initialState, action:any ) => {
    switch(action.type){
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart,action.payload]};
        case 'RESET_CART':
                return {...state, cart: []};    
        case 'PRODUCTS':
            return {...state, products: action.payload};
        case 'ORDERS':
            return {...state, orders: action.payload, cart:[]};
        case 'HEADERS':
            return  {...state, header: action.payload}; 
        default:
            return state;
    }
    
}

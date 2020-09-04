/** Add to Cart */
type Action = {
    type:'ADD_TO_CART',
    payload: string[]
}
export const addToCartAction = (cart: string[]):Action =>({
    type:'ADD_TO_CART',
    payload: cart
});

/** Reset Cart */
type ResetAction = {
    type:'RESET_CART',
    payload: string[]
}
export const resetCartAction = (cart: string[]):ResetAction =>({
    type:'RESET_CART',
    payload: cart
});



/** fetch books */

type ActionFetchBooks = {
    type:'PRODUCTS',
    payload: string[]
}

export const productsAction = (product: string[]):ActionFetchBooks =>({
    type:'PRODUCTS',
    payload: product
});


/** fetch books */

type ActionOrders = {
    type:'ORDERS',
    payload: string[]
}

export const ordersAction = (product: string[]):ActionOrders =>({
    type:'ORDERS',
    payload: product
});


/** Change Header*/
type HeaderAction = {
    type:'HEADERS',
    payload: string
}
export const changeHeader = (header: string):HeaderAction =>({
    type:'HEADERS',
    payload: header
});
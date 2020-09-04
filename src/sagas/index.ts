import {
    takeEvery,
    takeLatest,
    all,
    put,
    delay} from 'redux-saga/effects';

/** add to cart */
function* addCartSync(){
    delay(4000);
    yield put({type:'ADD_CART_SYNC',value:1});
} 

function* watchCart(){
    yield takeEvery('ADD_TO_CART',addCartSync);
}


/** export all */
export default function* rootSaga() {
    yield all([
    //watchBooks(),
    watchCart(),
    ]);
}
import { createStore,applyMiddleware } from 'redux';
import {baseReducers} from './reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(baseReducers,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import thunk from 'redux-thunk'
import rootSaga  from './root.saga'

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)


export const persistor = persistStore(store);

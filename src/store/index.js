import { applyMiddleware, createStore } from 'redux';
import reducers from './reducers';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import rootSaga from "./rootSaga"

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
];

const store = createStore(
    reducers,
    applyMiddleware(...middlewares)
);

const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export default { store, persistor };


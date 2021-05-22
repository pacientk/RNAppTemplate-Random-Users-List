import { createStore } from 'redux';
import reducers from './reducers';
import { persistStore } from 'redux-persist';

const store = createStore(reducers);
const persistor = persistStore(store);

export default { store, persistor };


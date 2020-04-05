import { createStore } from 'redux';

import rootReducer from '../reducers/toDoReducer';

const store = createStore(rootReducer)

export default store;
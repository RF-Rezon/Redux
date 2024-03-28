import { createStore } from 'redux';
import { reduser } from './Reducers/Redusers';

const store = createStore(reduser);

export default store;

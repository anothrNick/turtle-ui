import { createStore } from 'redux';
import reducer from './organizations/reducer';

const store = createStore(reducer);

export default store;
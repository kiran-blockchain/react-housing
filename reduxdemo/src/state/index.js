
import {combineReducers} from 'redux';

import { Counter } from './Counter';
import { Cart } from './Cart';
import { Products } from './Products';
export default combineReducers({
    Counter,
    Cart,
    Products
})
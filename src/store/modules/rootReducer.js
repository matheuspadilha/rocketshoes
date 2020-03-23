/**
 * @file: rootReducer.js
 * @author: Matheus Padilha
 * @copyright (c) - 3/2020
 *
 */
import { combineReducers } from 'redux';

import cart from './cart/reducer';

export default combineReducers({
  cart,
});

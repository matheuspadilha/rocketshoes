/**
 * @file: rootSaga.js
 * @author: Matheus Padilha
 * @copyright (c) - 3/2020
 *
 */
import { all } from 'redux-saga/effects';

import cart from './cart/sagas';

export default function* rootSaga() {
  return yield all([cart]);
}

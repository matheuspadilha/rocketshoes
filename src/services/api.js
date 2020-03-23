/**
 * @file: api.js
 * @author: Matheus Padilha
 * @copyright (c) - 3/2020
 *
 */
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
});

export default api;

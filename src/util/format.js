/**
 * @file: format.js
 * @author: Matheus Padilha
 * @copyright (c) - 3/2020
 *
 */
export const { format: formatPrice } = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

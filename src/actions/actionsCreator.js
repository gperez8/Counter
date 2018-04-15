import { INCREMENT, DECREMENT } from './actions';

export const increment = () => ({type:  INCREMENT, text: 'SE INCREMENTO EL CONTADOR'});
export const decrement = () => ({type:  DECREMENT, text: 'SE DECREMENTO EL CONTADOR'});
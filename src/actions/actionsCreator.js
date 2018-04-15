import { INCREMENT, DECREMENT } from './actions';

export const increment = () => {
	console.log('PASO POR EL ACTION_CREATOR_INCREMENT');
	return { type:  INCREMENT, text: 'SE INCREMENTO EL CONTADOR'}

};

export const decrement = () => {
	console.log('PASO POR EL ACTION_CREATOR_DECREMENT');
	return { type:  DECREMENT, text: 'SE DECREMENTO EL CONTADOR'}
};
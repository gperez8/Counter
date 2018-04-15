import { INCREMENT, DECREMENT } from '../actions/actions';

export default (state = 0, action) => {
	switch (action.type) {
		case INCREMENT:
			console.log('PASO POR EL REDUCER_INCREMENT');
			return state + 1;
		case DECREMENT: 
			console.log('PASO POR EL REDUCER_DECREMENT');
			return state - 1;
		default: 
			console.log('PASO POR EL REDUCER_DEFAULT');
			return state;
	}
}
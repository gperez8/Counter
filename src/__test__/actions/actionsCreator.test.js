import { increment, decrement } from '../../actions/actionsCreator';
import configureStore from 'redux-mock-store';

const mockStore = configureStore();

describe('Test Actions Creator increment and decrement', () =>{
	it('increment the counter', () => {
		const store = mockStore({ value: 0 });
		store.dispatch(increment());

		const actions = store.getActions();
		console.warn(actions);

		expect(actions.length).toBe(1);
		expect(actions[0].type).toEqual('INCREMENT');
	});

	it('decrement the counter', () => {
		const store = mockStore({ value: 0 });
		store.dispatch(decrement());

		const actions = store.getActions();
		console.warn(actions);

		expect(actions.length).toBe(1);
		expect(actions[0].type).toEqual('DECREMENT');
	});
	
})
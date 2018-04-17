import reducers from '../../reducers';

describe('test reducers', () => {

	it('return the initial state',() => {
		expect(reducers(undefined,{})).toEqual(0);	
	});

	it('return the increment state', () => {
		expect(reducers(0, {type: 'INCREMENT', text: 'SE INCREMENTO EL CONTADOR'})).toEqual(1);
	});

	it('return the decrement state', () => {
		expect(reducers(1, {type: 'DECREMENT', text: 'SE DECREMENTO EL CONTADOR'})).toEqual(0);
	});
});
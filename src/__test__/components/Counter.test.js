import React from 'react';
import { configure, shallow, render, mount } from "enzyme";
import configureStore from 'redux-mock-store';
import connectCounter, { Counter } from '../../components/Counter';

const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

const mockStore = configureStore(); 

/* component aislado  */
it('test shallow <Counter />', () => {
	const wrapper = shallow(<Counter />);
	expect(wrapper.find('p').length).toBe(1);
});

/* component Conectado  */
it('test shallow <connectCounter />', () => {
	const store = mockStore(0);
	const wrapper = shallow(<connectCounter value={store}/>);
	expect(wrapper.find('span').length).toBe(0);
});

it('test simule a click to increment counter', () => {
	const store = mockStore(0);
	const wrapper = shallow(<connectCounter value={store}/>);
	/*wrapper.find('#counter').simulate('click');

	const actions = store.getActions();
	expect(actions.length).toBe(1);
	expect(actions[0].type).toBe('INCREMENT');
	expect(actions[0]).not.toBeNull();
	expect(actions[0]).toBe(1);*/
});


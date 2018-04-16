import React from 'react';
import { Counter } from '../../components/Counter';
import { configure, shallow, render, mount } from "enzyme";
const Adapter = require("enzyme-adapter-react-16");
configure({ adapter: new Adapter() });

it('Render <Counter />', () => {
	mount(<Counter />);
});
 

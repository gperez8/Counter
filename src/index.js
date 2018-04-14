import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);
const rootID = document.getElementById("root");

render(
	<Provider store={store}>
    	<Counter 
    		value={store}
    	/>
	</Provider>,
	rootID
)








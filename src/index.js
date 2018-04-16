import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter, composeWithDevTools());
const rootID = document.getElementById("root");

render(
	<Provider store={store}>
    	<Counter 
    		value={store.getState()}
    	/>
	</Provider>,
	rootID
)








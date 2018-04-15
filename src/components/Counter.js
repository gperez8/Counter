import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions/actionsCreator';
/*import { bindActionCreators }  from 'redux';*/

const Counter = ({value, OnIncrement, OnDecrement}) => (
	<p>
		<button onClick={() => OnIncrement()}> + </button>
		{value} 
		<button onClick={() => OnDecrement()}> - </button>
	</p>
);

const mapStateToProps = state => ({ value: state });

const mapDispatchToProps = dispatch => ({
    OnIncrement: () => dispatch(increment()),
    OnDecrement: () => dispatch(decrement()),
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);
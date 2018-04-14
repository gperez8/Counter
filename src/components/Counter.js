import React, { Component } from 'react';
import { connect } from 'react-redux';
/*import { bindActionCreators }  from 'redux';*/

class Counter extends Component {
	render () {
		return (
			<p>
				<button onClick={() => this.props.OnIncrement()}> + </button>
				{this.props.value} 
				<button onClick={() => this.props.OnDecrement()}> - </button>
			</p>
		)
	}
}

const mapStateToProps = state => ({ value: state });

const mapDispatchToProps = dispatch => ({
    OnIncrement: () => dispatch({type: 'INCREMENT'}),
    OnDecrement: () => dispatch({type: 'DECREMENT'}),
});

export default connect(mapStateToProps,mapDispatchToProps)(Counter);


import React from 'react';
import './input.css';
import { connect } from 'react-redux';
import * as actionTypes from '../../store/actions';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div>
      <input type="number" value={props.value}
        onClick={props.resetValue} onChange={props.handleChange} />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    value: state.value,
    cat: state.categories
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleChange: e => dispatch({ type: actionTypes.HANDLE_CHANGE,
      payload: { event: e.target.value } }),
  };
};

Input.propTypes = {
  resetValue: PropTypes.func,
  value: PropTypes.string,
  handleChange: PropTypes.func

};

export default connect(mapStateToProps, mapDispatchToProps)(Input); 
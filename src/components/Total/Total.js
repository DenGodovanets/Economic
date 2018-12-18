import React from 'react';
import {connect} from 'react-redux';
import './total.css';
import PropTypes from 'prop-types';

const Total = props=>{
  const totalArr = ()=>{
    const arr = [];
    Object.values(props.cat).forEach(element => {
      arr.push(...element.value);
    });
    return arr;
  };    
  const totalSum = totalArr().reduce(function (sum, current) {
    return parseFloat(sum) + parseFloat(current);
  }, 0);  
  return (
    <ul className='total'>
      <li>{props.children}:{totalSum} грн. </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    cat: state.categories
  };
};

Total.propTypes = {
  children: PropTypes.string,
  cat: PropTypes.object
};

export default connect(mapStateToProps)(Total);
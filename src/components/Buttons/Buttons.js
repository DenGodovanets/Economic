import React from 'react';
import {connect} from 'react-redux';
import * as actionTypes from '../../store/actions';
import './button.css';
import PropTypes from 'prop-types';

const Buttons = props => {  
  const buttons = Object.keys(props.cat).map(elem=>{    
    return (        
      <button onClick={()=>props.onClickButton(props.cat[elem])} key={props.cat[elem].id}>
        {props.cat[elem].title}
      </button>
    );
  });    
  return (
    <div className='button_list'>
      {buttons}
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
    onClickButton: e => dispatch({type:actionTypes.CLICK_BUTTON,payload:{event:e}})
  };
};

Buttons.propTypes = {
  cat: PropTypes.object,
  title: PropTypes.string,
  onClickButton:PropTypes.func
};
export default connect(mapStateToProps,mapDispatchToProps)(Buttons); 
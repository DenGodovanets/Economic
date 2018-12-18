import React from 'react';
import {connect} from 'react-redux';
import ListDetails from './ListDetails/ListDetails';
import * as actionTypes from '../../store/actions';
import './lists.css';
import PropTypes from 'prop-types';

const List = props => {
  return (            
    <ul className='list'>            
      {Object.values(props.cat).map(list=>
        <li key={list.id} onClick={()=>props.openList(list)}>
          {list.title}:{list.value.reduce(function (sum, current) {
            return parseFloat(sum) + parseFloat(current);
          }, 0)
          } грн { props.addList === list.id ? <ListDetails value={list}/> : null}
        </li> 
      )}              
    </ul>            
  );
};
const mapStateToProps = state => {
  return {
    value: state.value,
    cat: state.categories,
    addList:state.addList
  };
};

const mapDispatchToProps = dispatch => {
  return {       
    openList: e => dispatch({type:actionTypes.OPEN_LIST,payload:{event:e}}),        
  };
};

List.propTypes = {
  cat: PropTypes.object,
  openList: PropTypes.func,
  addList: PropTypes.any
};

export default connect(mapStateToProps,mapDispatchToProps)(List);
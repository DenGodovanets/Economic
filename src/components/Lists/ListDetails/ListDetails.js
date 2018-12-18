import React from 'react';
import './listDetails.css';
import PropTypes from 'prop-types';

const ListDetails = props => {    
  const propert = props.value;
  return (
    <ul className='listDetails'>
      {propert.value.map((item, i) => 
        <li key={propert.date[i]}>Сумма{item}грн: Дата:{propert.date[i]}</li>
      )}
    </ul>
  );
};

ListDetails.propTypes = {
  value: PropTypes.object
};

export default ListDetails;
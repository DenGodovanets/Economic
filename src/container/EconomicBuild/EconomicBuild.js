import React, { Component } from 'react';
import Input from '../../components/InputFields/Input';
import Buttons from '../../components/Buttons/Buttons';
import List from '../../components/Lists/Lists';
import Total from '../../components/Total/Total';

class EconomicBuild extends Component {   
  render () {       
    return (
      <div>              
        <Input></Input>
        <Buttons></Buttons>
        <List></List>
        <Total>Загальна сума</Total>
      </div>
    );
  }
}

export default EconomicBuild; 
import React from 'react';
import {Route, Switch} from 'react-router-dom';
import EconomicBuild from './container/EconomicBuild/EconomicBuild';
import NotFound from './components/NotFound/NotFound';
import Info from './components/Info/Info';

const Router = ()=>( 
  <Switch>
    <Route exact path="/" component={EconomicBuild}></Route>                
    <Route path="/info" component={Info}></Route>
    <Route path="*" component={NotFound} />   
  </Switch>          
);
  
export default Router;

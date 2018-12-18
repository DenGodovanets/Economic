import React from 'react';
import './layout.css';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const Layout = props => (   
  <div className='layout'>
    <header>
      <div className='logo'><Link to="/">Economist</Link></div>
      <button className='info'><Link to="/info">Інформація</Link></button>
    </header>
    <main>
      {props.children}       
    </main>      
  </div>
);

Layout.propTypes = {
  children: PropTypes.object
};

export default Layout;
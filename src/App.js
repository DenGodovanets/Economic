import React, { Component } from 'react';
import './app.css';
import Layout from './components/Layout/Layout';
import Routes from './Routes';

class App extends Component {
  render () {
    return (
      <div className='app-components'>
        <Layout>
          <Routes/>
        </Layout>
      </div>      
    );
  }
}

export default App;

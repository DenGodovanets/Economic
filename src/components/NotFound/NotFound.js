import React from 'react';
import './notFound.css';
import {Link} from 'react-router-dom';

const Notfound = () => {
  return (
    <div className='notFound'>            
      <b>ЩОСЬ ПІШЛО НЕ ТАК</b>
      <div className='error'>404 Помилка</div>
      <span><Link to="/">Перейдіть на головну сторінку</Link></span>
    </div>
  );
};

export default  Notfound; 
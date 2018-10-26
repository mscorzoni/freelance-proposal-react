import React from 'react';
import'./Button.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const button = (props) => (
  <button
    className={props.btnType}
    onClick={props.clicked}
    >
    {props.children}
  </button>
);


export default button;
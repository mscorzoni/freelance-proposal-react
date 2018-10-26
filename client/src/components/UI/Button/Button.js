import React from 'react';
import classes from './Button.css';

const button = (props) => (
  <button
    className={classes.Success}
    onClick={props.clicked}
    >
    {props.children}
  </button>
);


export default button;
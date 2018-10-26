import React from 'react';
import CssModules from 'react-css-modules'
import styles from './Button.css';

const button = (props) => (
  <button
    className={styles.Success}
    onClick={props.clicked}
    >
    {props.children}
  </button>
);


export default CssModules(button);
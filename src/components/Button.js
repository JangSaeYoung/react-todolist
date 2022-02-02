import React from 'react';
import styles from './Button.module.css';

function Button({text}){
   return(
        <div>
           <div className={styles.BtnStyle}>{text}</div>
        </div>
   )
}

export default Button;
import React from 'react';
import styles from './TodoItem.module.css';

function TodoItem({text}){
   return(
    <div className={styles.delBtnStyle}>{text}</div>
    )

}

export default TodoItem;
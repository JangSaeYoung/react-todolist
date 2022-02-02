import React from 'react';
import styles from './TodoInput.module.css';

function TodoInput(){
return(
    <div>
        <div className={styles.headerBox}>
            <p className={styles.headerText}>할일목록</p>
        </div>
    <p>헤더를 넣을 공간</p>
    </div>
    )
}

export default TodoInput;
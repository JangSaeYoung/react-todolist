import React from 'react';
import styles from './TodoList.module.css';
import {BsFillPencilFill} from 'react-icons/bs';
import {BsFillTrashFill} from 'react-icons/bs';

// input에 사용자가 입력버튼을 누르면 TodoList에 목록으로 새롭게 생겨난다. 


function TodoList(){
   return(
   <div className={styles.todoBoxStyle}>
     <div className={styles.todoBoxOne}>
     <p className={styles.listText}>하루종일 놀기</p>
     <div className={styles.todoSetBtn}>
            <input type= "checkbox" className={styles.checkBoxStyle}></input>
            <BsFillPencilFill />
            <BsFillTrashFill />
     </div>
     </div>
   </div>
   )

}

export default TodoList;
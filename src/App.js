import React from 'react';
import TodoList from './components/TodoList';
// import TodoInput from './components/TodoInput';
import TodoItem from './components/TodoItem';
import Button from './components/Button';
import styles from './App.module.css';
// import Layout from './public/Layout';
// import { useState } from 'react';

// input에 입력하고 add버튼을 누르면 
// input창의 글자는 없어지고 t
// odolist에 새로운 항목으로 뜬다




function App() {


 
  return (
    <div className={styles.container}>
      <div className={styles.headerBox}>
        <p className={styles.themText}> 오늘의 할 일</p>
      </div>
      <div className={styles.inputBoxLayout}>
        <input className={styles.inputBox}  
        placeholder="New Todo" 
        />
        <button className={styles.inputBtn}
        >Add new task</button>
      </div>
        {/* <TodoInput / > */}
      <div className={styles.ListBtnBox}>
        <p className={styles.themText}>TodoList</p>
        <div className={styles.ListBtnBoxLayout}>
          <div className={styles.ListBtn}>
          <Button text ="All" />
          <Button text ="Done" />
          <Button text ="Todo" />
          </div>
        </div>
      </div>
        <TodoList / >
        <div className={styles.ListBtn}>
        <TodoItem text = "Delete done tasks"/>
        <TodoItem text = "Delete all tasks"/>
       </div>
    </div>
  );
}

export default App;

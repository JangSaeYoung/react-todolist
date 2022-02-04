import React, {useCallback, useState} from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import { useRef } from 'react';



function App() {
    const [ todos, setTodos ] = useState([]);


    const nextID = useRef(4);
    
    const onInsert = useCallback(
      (text) => {
        const todo = {
          id: nextID.current,
          text,
          checked: false,        
        };
        setTodos(todos.concat(todo));
        nextID.current+=1;
      },
      [todos]
    );

  const onRemove = useCallback(
    (id) => {
      setTodos(todos.filter((todo) => todo.id !== id));
    },
    [todos]
  )

  const ontoggle = useCallback(
    (id) => {
      setTodos(todos.map((todo)=> 
      (todo.id === id? { ...todo, checked: !todo.checked} : todo)))
    },
    [todos]
  )

  return (
  <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos = {todos} onRemove={onRemove} onToggle={ontoggle}/>
  </TodoTemplate>
  );
}

export default App;

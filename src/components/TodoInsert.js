import React, {useCallback, useState} from 'react';
import './TodoInsert.scss';

const TodoInsert = ({onInsert})=> {

  const [ value, setValue ] = useState('');

  const onChange = useCallback((e) =>{
     setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue('');
      e.preventDefault();
    },
    [onInsert, value]
  );

return(
      <form className="inputBoxLayout" onSubmit={onSubmit}>
        <input placeholder= "New Todo"
        value={value}
        onChange={onChange} />
        <button type="submit" onSubmit={onSubmit}>
          Add new task
          </button>
      </form>
    );
};

export default TodoInsert;
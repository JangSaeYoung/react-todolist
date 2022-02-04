import React from 'react';
import {BsFillTrashFill} from 'react-icons/bs';
import {MdOutlineCheckBoxOutlineBlank, MdOutlineCheckBox} from 'react-icons/md'
import './TodoListItem.scss';
import cn from 'classnames';



const TodoListItem = ({todo, onRemove, onToggle}) => {

const { id, text, checked } = todo;

   return(
     
    <div className='TodoListItem'>
        <div className={cn('checkbox',{checked})}
            onClick={() => onToggle(id)}>
            {checked ? <MdOutlineCheckBox />
            : <MdOutlineCheckBoxOutlineBlank /> }
            <div className='todoText'>{text}</div>
        </div>
        <div className='todoTrash' onClick={()=> onRemove(id)}>
            <BsFillTrashFill />
        </div>
    </div>

    );
};

export default TodoListItem;
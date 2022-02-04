import React from 'react';
import './TodoTemplate.scss';

// 투두리스트 가운데 정렬 및 큰 틀 컴포넌트 


const TodoTemplate =({children})=>{
   return(
      <div className="templateContainer">
         <div className="templateTitle">TodoList</div>
         <div className="content">{children}</div>
      </div>
   );
};

export default TodoTemplate;
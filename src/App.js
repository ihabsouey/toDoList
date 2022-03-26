import Form from './Form';
import React, { useState, useEffect } from 'react';
import Todolist from './Todolist';
import DarkModeToggle from './DarkMode';
import { DragDropContext } from 'react-beautiful-dnd'
function App() {

  const [todoList, setTodoList] = useState(() => {
    const localData = localStorage.getItem('todoList');
    return localData ? JSON.parse(localData) : [];
  });
  const [valueToAdd, setValueToAdd] = useState("");
  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

 const  onDragEnd = (param) => {
  const srcI = param.source.index;
  const desI = param.destination?.index;
  if (desI) {
    const reOrdered = [...todoList];
    reOrdered.splice(desI, 0, reOrdered.splice(srcI, 1)[0]);
    setTodoList(reOrdered);
  }
  } ;
  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>T O D O</h1>
          <DarkModeToggle />

        </div>
        <div className="tasks">
          <Form
            todoList={todoList}
            setTodoList={setTodoList}
            valueToAdd={valueToAdd}
            setValueToAdd={setValueToAdd}
          />
        </div>
        <DragDropContext onDragEnd={onDragEnd}> 

          <div className='list'>
            <Todolist
              todoList={todoList}
              setTodoList={setTodoList}
            />
          </div>
        </DragDropContext>

      </div>
    </div>
  );
}

export default App;

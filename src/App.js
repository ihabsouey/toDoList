import Form from './Form';
import React  , {useState , useEffect} from 'react';
import Todolist from './Todolist';
import DarkModeToggle from './DarkMode';
function App() {

  const [todoList, setTodoList] = useState(() =>{
    const localData = localStorage.getItem('todoList');
    return localData ? JSON.parse(localData) :[] ;
  });
  const [valueToAdd, setValueToAdd] = useState("") ;
  useEffect(() => {
    localStorage.setItem('todoList' , JSON.stringify(todoList))
  }, [todoList])

  return (
    <div className="app">
      <div className="container">
        <div className="header">
          <h1>T O D O</h1>
        <DarkModeToggle/>

        </div>
        <div className="tasks">
          <Form
            todoList={todoList}
            setTodoList={setTodoList}
            valueToAdd={valueToAdd}
            setValueToAdd={setValueToAdd}
          />
        </div>
        <div className='list'>
          <Todolist 
          todoList={todoList}
          setTodoList={setTodoList}
          />
        </div>
      </div>
    </div>
  );
}

export default App;

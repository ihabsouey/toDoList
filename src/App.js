import Form from './Form';
import colorMode from './images/icon-sun.svg'
import React  , {useState , useEffect} from 'react';
import Todolist from './Todolist';
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
          <img src={colorMode} height="100%" width="auto"  alt='WhiteMode'/>
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

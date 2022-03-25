import React , {useState} from 'react'
import cross from './images/icon-cross.svg'
import FilterButton from './FilterButton'

const Todolist = ({ todoList, setTodoList }) => {
    const [filter, setFilter] = useState('All');
    const FILTER_MAP = {
        All: () => true,
        Active: task => !task.completed,
        Completed: task => task.completed
    };
    const FILTER_NAMES = Object.keys(FILTER_MAP);
    const filterList = FILTER_NAMES.map(name => (
        <FilterButton
            key={name}
            name={name}
            isPressed={name === filter}
            setFilter={setFilter}
        />
    ));

    
    const handleDelete = ({ id }) => {
        setTodoList(todoList.filter((todo) => todo.id !== id))
    }
    const handleComplete = (todo) => {
        setTodoList(
            todoList.map((td) => {
                if (td.id === todo.id) {
                    return { ...td, completed: !td.completed }
                }
                return td
            })
        )
    }
    const handleClearCompleted = () => {
        setTodoList(todoList.filter((todo) => todo.completed === false))
    }

    return (
        <div>

            <div className='taskList'>
                <ul className='tasks'>
                    {
                        todoList.filter(FILTER_MAP[filter]).map((todo) => {
                            return <li className='task' key={todo.id}>
                                <input type="checkbox" className='checkadd'  checked={todo.completed} onClick={() => handleComplete(todo)} /> 
                                <span>{todo.title} </span> 
                                <img className='imgcross' src={cross} alt='delete' onClick={() => handleDelete(todo)} />
                            </li>

                        })
                    }

                    <li className='task filter'>
                        <span>{todoList.length} items left </span>
                        <div className='filterList'>
                             
                            {filterList}
                        </div>
                        <button id='ClearCompleted' onClick={() => handleClearCompleted()}> Clear Completed </button>
                    </li>
                    <li className='task add filterListMobile '>
                             
                             {filterList}

                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Todolist
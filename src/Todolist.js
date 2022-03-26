import React, { useState } from 'react'
import cross from './images/icon-cross.svg'
import FilterButton from './FilterButton'
import { Droppable, Draggable } from "react-beautiful-dnd";


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
                <Droppable droppableId='drop1'>
                    {(provided, snapshot) => (
                        <ul className='tasks'
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >

                            {
                                todoList.filter(FILTER_MAP[filter]).map((todo, index) => {
                                    return (
                                        <Draggable key={todo.id} draggableId={"draggable-" + todo.id} index={index}>
                                            {(provided) => (

                                                <li index={index} className='task' key={todo.id}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    ref={provided.innerRef}
                                                >
                                                    <input type="checkbox" className='checkadd' checked={todo.completed} onChange={() => handleComplete(todo)} />
                                                    <span>{todo.title} </span>
                                                    <img className='imgcross' src={cross} alt='delete' onClick={() => handleDelete(todo)} />
                                                </li>
                                            )}
                                        </Draggable>
                                    )
                                })
                            }
                            {provided.placeholder}

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
                    )
                    
                    }

                </Droppable>

            </div>

        </div>
    )
}

export default Todolist
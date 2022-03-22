import React from 'react'
import cross from './images/icon-cross.svg'

const Form = () => {
    const [todoList, setTodoList] = React.useState(["Check my email", " Make a new projet"])
    const [valueToAdd, setValueToAdd] = React.useState("")

    const submit = (e) => {
        e.preventDefault()
        setTodoList([valueToAdd, ...todoList])
        setValueToAdd('')
    }

    return (
        <div>

            <div className='add'>
                <form onSubmit={submit} >
                    <input type="checkbox" onClick={submit} className='checkadd' />
                    <input type="text" placeholder='Create a new todo...' value={valueToAdd} onChange={(e) => setValueToAdd(e.target.value)} className='task' id='taskadd'>
                    </input>
                </form>

            </div>
            <div className='taskList'>
                <ul className='tasks'>
                    {
                        todoList.map((todo, index) => {
                            return <li className='task' key={index}> 
                              <input type="checkbox" className='check' /> {todo} <img className='imgcross' src={cross} alt='delete' />
                               </li>

                        })
                    }

                    <li className='task filter'>
                        <span>{todoList.length} items left </span>
                        <div>
                            <button id='All' > All </button>
                            <button id='Active' > Active </button>
                            <button id='Completed' > Completed </button>
                        </div>
                        <button id='ClearCompleted' > Clear Completed </button>
                    </li>

                </ul>
            </div>

        </div>
    )
}

export default Form

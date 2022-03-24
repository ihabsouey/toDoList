import React from 'react'
import {v4 as uuidv4} from 'uuid'

const Form = ({todoList,setTodoList,valueToAdd,setValueToAdd} ) => {
    
    const submit = (e) => {
        e.preventDefault()
        if ((valueToAdd) && (valueToAdd!==' ') ){
            setTodoList([{id:uuidv4() , title:valueToAdd , completed:false}, ...todoList])
            setValueToAdd('')
        }
       
    }

    return (
             <div className='add'>
                <form onSubmit={submit} >
                    <input type="checkbox" onClick={submit} className='checkadd' />
                    <input type="text"  placeholder='Create a new todo...' value={valueToAdd} onChange={(e) => setValueToAdd(e.target.value)} className='task' id='taskadd'>
                    </input>
                </form>

            </div>
           
    )
}

export default Form

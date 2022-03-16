import React, { useState } from 'react'
import Card from './card/Card.js'
import CardAfter from './card/CardAfter.js'

import ShowTodo from './ShowTodo'
import '../App.css'
function ToDo() {

    const [task, setTask] = useState("")
    const [data, setData] = useState([1, 2, 1])
    const [tempArr, settempArr] = useState([1, 2, 1])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        setData([...data, newData])
        setTask('')
    }

    const deleteItem = (a) => {
        const finalData = data.filter((curEle, index) => {
            return index !== a;
        })
        setData(finalData)
    }

    // const [key , setKey]  = useState(1); 
    var key = 1 ; 
    return ( 
        <div className = "container-fluid" >

        <div className = "row justify-content-center align-items-center main-row" >
        <div className = "" >
        <div className = "row bg-primary text-white" >
        <div className = "col  p-2" >
        <h4 className = 'text-center' > Todo App Using React JS </h4> 
        </div> </div> 
        <form onSubmit = { submitHandler } >
        <div className = "row justify-content-between text-white p-2" >
        <div className = "form-group flex-fill mb-2 col-9" >
        <input id = "todo-input"
        type = "text"
        className = "form-control"
        placeholder='Enter the task here'
        onChange = {(e)=> onChangeHandler(e.target.value) }
        /> 
        </div> 
        <button type = "submit"
        className = "btn btn-primary mb-2 ml-2 col-3" > Add todo </button> 
        </div >
        </form>

       {
           tempArr.map((val , ind) =>{
                return (
                    <div className='manageSp'>
                     {
                                     data.map((value, index) => {
                                        // return <ShowTodo
                                        // key = { index }
                                        // id = { index }
                                        // task = { value }
                                        // onSelect = { deleteItem }
                                         // />
                                        return <CardAfter num={key++}/>;
                                    })
                        
                     }
                    </div>      
                )
           })
       }


        </div> </div > 
        </div>
    )

}


export default ToDo ; 
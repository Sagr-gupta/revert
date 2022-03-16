import React, { useEffect, useState } from 'react'
import Card from './card/Card.js'
import CardAfter from './card/CardAfter.js'
import axios from 'axios' ; 


import ShowTodo from './ShowTodo'
import '../App.css'
function ToDo() {

    const [task, setTask] = useState("")
    const [data, setData] = useState([[1, 2, 1]])
    const [tempArr, settempArr] = useState([])

    const onChangeHandler = (e) => {
        setTask(e.target.value)
    }

    var url = 'http://localhost:8000/getall'

    useEffect(()=>{
         axios.get(
             url
         )
         .then((res)=>{
             console.log('res' , res)
             let arr = res.data.data ; 
             let temp = [] ; 
             let final = [] ; 
             for(var i=0 ; i<arr.length ; i++){
                  temp.push(arr[i]) ;
                  if(temp.length ===3){
                      final.push(temp);
                      temp = [] ; 
                  }
             }
             final.push(temp) ; 

             settempArr(final)

         }).catch((err)=>{
            console.log('err' , err)

         })
    } , [data])

    const submitHandler = (e) => {
        e.preventDefault();
        const newData = task;
        // setData([...data, task])
        console.log('hfh' , tempArr    )
        // settempArr([...tempArr , 1]) ; 
        // if(tempArr[tempArr.length-1].length%3 === 0){
        //     let arr = [] ; 
        //     arr.push(task);
        //     settempArr([...tempArr , arr])
        // }else{
        //     let arr = tempArr[tempArr.length-1] ; 
        //     arr.push(task) ; 
        //     let here = tempArr ; 
        //     here[tempArr.length-1] = arr ; 
        //     console.log(here);
        //     settempArr(here)
        //     setData([1 , 2])
        // }
        url = 'http://localhost:8000/add/todo'
        let obj = {
            "todo" : task
        }
        axios.post(
            url , obj
        )
        .then((res)=>{
            console.log('res' , res)
            alert('data added');
        }).catch((err)=>{
           console.log('err' , err)

        })

        setData([1 , 5]) ; 
    }


    const func = (a) => {
        setData([4 , 5])
    }

     
    const deleteItem = (a) => {
        const finalData = data.filter((curEle, index) => {
            return index !== a;
        })
        setData(finalData)
    }

    // useEffect(()=>{
    //      axios.get('https://jsonplaceholder.typicode.com/todos')
    //      .then((res)=>{
    //          console.log(res) ; 
    //      })
    // } , [])

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
        <form  >
        <div className = "row justify-content-between text-white p-2" >
        <div className = "form-group flex-fill mb-2 col-9" >
        <input id = "todo-input"
        type = "text"
        className = "form-control"
        placeholder='Enter the task here'
        onChange = {(e)=> setTask(e.target.value) }
        /> 
        </div> 
        <button type = "submit"
        className = "btn btn-primary mb-2 ml-2 col-3" onClick={submitHandler} > Add todo </button> 
        </div >
        </form>

       {
           tempArr.map((val , ind) =>{
                return (
                    <div className='manageSp'>
                     {
                                     val.map((value, index) => {
                                        if(value.done ==="1") {
                                           return <CardAfter trig = {func}  data = {value} num={key++}/>
                                        }
                                        return <Card  trig = {func}  data = {value} num={key++}/>;
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
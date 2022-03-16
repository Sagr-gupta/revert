import React from 'react'
import './card.css'
import axios from 'axios' ; 




export default function Card({num , data , trig}) {


    const delHandle = () => {
        var url = 'http://localhost:8000/delete/todo/'+data._id ; 

        axios.get(
            url 
        )
        .then((res)=>{
            console.log('res' , res)
            alert('data updated');
        }).catch((err)=>{
           console.log('err' , err)

        })

        trig() ; 


    }


    const submit  = () =>{
        var url = 'http://localhost:8000/update/todo/'+data._id ; 

        axios.get(
            url 
        )
        .then((res)=>{
            console.log('res' , res)
            alert('data updated');
        }).catch((err)=>{
           console.log('err' , err)

        })

        trig() ; 

    }


    return (
        <div>
            
            <div style={{display:'flex'}}>
            <p style={{color:'#AFAFAF' , marginTop:'5%' , position:'relative'}}>{num}.</p>
            <div class="card" style={{width:'26rem'   , height:'10rem' , backgroundColor:'#171717' , marginLeft:'3%' , marginTop:'0%' , position:''}}>

                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div class="card-body" style={{ borderRadius:'25%'}}>
                    <h5 class="card-title"><p style={{color:'white'}}>{data.todo}</p></h5>
                    <p class="card-text"></p>
                    <hr style={{backgroundColor:'white'}}/>
                    <button onClick={submit} class="btn " style={{backgroundColor:'#C620A7'}}>Mark as completed</button>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={delHandle} class="btn"><p style={{color:'#AFAFAF'}}>Delete</p></button>
                </div>
            </div>

            </div>
        </div>
    )
}

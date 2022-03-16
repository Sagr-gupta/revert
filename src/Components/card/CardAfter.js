import React from 'react'
import './card.css'
import axios from 'axios' ; 

export default function CardAfter({num , data , trig}) {


    const delHandle = () => {
        var url = 'http://localhost:8000/delete/todo/'+data._id ; 

        axios.get(
            url 
        )
        .then((res)=>{
            console.log('res' , res)
            alert('data deleted');
        }).catch((err)=>{
           console.log('err' , err)

        })

        trig() ; 


    }
    return (
        <div>
            

            <div style={{display:'flex'}}>
            <p style={{color:'#AFAFAF' , marginTop:'5%' , position:''}}>{num}.</p>
            <div class="card" style={{width:'26rem' , height:'10rem' , backgroundColor:'#171717' ,
            borderWidth:'1%' ,borderColor:'greenyellow', marginLeft:'3%' , marginTop:'0%' , position:''}}>

                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div class="card-body">
                    <h7 class="card-title"><p style={{color:'white'}}>{data.todo}</p></h7>
                    
                    <img style={{width:'15%' , height:'15%' , marginLeft:'98.1%' , zIndex:'9999'
            , marginTop:'0' , marginBottom:'0' , position:'relative' }} src="https://img.icons8.com/color/48/000000/ok--v1.png"/>

                    <p class="card-text"></p>
                    <hr style={{backgroundColor:'white'}}/>
                    <a href="#" class="btn "><p style={{color:'#AFAFAF'}}>Task completed</p></a>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <button onClick={delHandle} class="btn"><p style={{color:'#AFAFAF'}}>Delete</p></button>

                </div>
            </div>
            <div>

            </div>


            </div>

        </div>
    )
}

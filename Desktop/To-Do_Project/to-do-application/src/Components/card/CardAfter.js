import React from 'react'
import './card.css'

export default function CardAfter({num}) {

    return (
        <div>
            

            <div style={{display:'flex'}}>
            <p style={{color:'#AFAFAF' , marginTop:'5%' , position:''}}>{num}.</p>
            <div class="card" style={{width:'26rem' , height:'10rem' , backgroundColor:'#171717' ,
            borderWidth:'1%' ,borderColor:'greenyellow', marginLeft:'3%' , marginTop:'0%' , position:''}}>

                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div class="card-body">
                    <h7 class="card-title"><p style={{color:'white'}}>Card title</p></h7>
                    
                    <img style={{width:'15%' , height:'15%' , marginLeft:'98.1%' , zIndex:'9999'
            , marginTop:'0' , marginBottom:'0' , position:'relative' }} src="https://img.icons8.com/color/48/000000/ok--v1.png"/>

                    <p class="card-text"></p>
                    <hr style={{backgroundColor:'white'}}/>
                    <a href="#" class="btn "><p style={{color:'#AFAFAF'}}>Mark as completed</p></a>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="btn"><p style={{color:'#AFAFAF'}}>Delete</p></a>


                </div>
            </div>
            <div>

            </div>


            </div>

        </div>
    )
}

import React from 'react'
import './card.css'

export default function Card({num}) {
    return (
        <div>
            
            <div style={{display:'flex'}}>
            <p style={{color:'#AFAFAF' , marginTop:'5%' , position:'relative'}}>{num}.</p>
            <div class="card" style={{width:'26rem'   , height:'10rem' , backgroundColor:'#171717' , marginLeft:'3%' , marginTop:'0%' , position:''}}>

                {/* <img class="card-img-top" src="..." alt="Card image cap" /> */}
                <div class="card-body" style={{ borderRadius:'25%'}}>
                    <h5 class="card-title"><p style={{color:'white'}}>Card title</p></h5>
                    <p class="card-text"></p>
                    <hr style={{backgroundColor:'white'}}/>
                    <a href="#" class="btn " style={{backgroundColor:'#C620A7'}}>Mark as completed</a>{' '}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <a href="#" class="btn"><p style={{color:'#AFAFAF'}}>Delete</p></a>
                </div>
            </div>

            </div>
        </div>
    )
}

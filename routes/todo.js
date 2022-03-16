const router=require('express').Router()
const Todo_model=require('../models/todo')


router.post('/add/todo',(req,result)=>{
    const {todo}=req.body;
    const newTodo=new Todo_model({todo,email_:"dhdhd",done:"0"})
    if(todo==""){
        res.redirect('/')
    }
    newTodo.save()
    .then(()=>{
        console.log("doc added to db")
        result.send({"data" : "todo added successfuly"}) ; 
    })
    .catch((err)=>{
        result.send({"data" : "failed to add todo"}) ; 
        console.log(err)      
    }
    );

})

.get("/update/todo/:_id",(req,result)=>{
    const {_id}=req.params;
    const info=Todo_model.find();
    console.log(info)
    Todo_model.updateOne({_id}, { done:"1"})
    .then(()=>{
        console.log("deleted")
        result.send({"data" : "succesfuly deleted"})

    })
    .catch((err)=>{
        result.send({"data" : "failed to delete"}) ; 
        console.log(err)  
      }
    );
})

.get("/delete/todo/:_id",(req,result)=>{
    const {_id}=req.params;
    Todo_model.deleteOne({_id})
    .then(()=>{
        console.log("deleted")
        result.send({"data" : "deleted"}) ; 

    })
    .catch((err)=>{
        result.send({"data" : "failed to get data"}) ; 
        console.log(err)      
    }
    );
})

.get("/getall",(req,result)=>{
    Todo_model.find({})
    .then((res)=>{
        console.log("deleted" , res)
        result.send({"data" : res})
    })
    .catch((err)=>{
        result.send({"data" : "failed to get data"}) ; 
        console.log(err)      
    }
        );
});

module.exports=router;

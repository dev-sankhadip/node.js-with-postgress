const indexRouter=require('express').Router();
const { client }=require('../db/db')

indexRouter.get('/index',(request, response)=>
{
    console.log(request.body);
})



module.exports={
    indexRouter
}
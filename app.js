const express=require('express');
const path=require('path');
const { indexRouter }=require('./routes/index')

const app=express();

app.use('/index', indexRouter);


app.listen(3000, ()=>
{
    console.log('server started on 3000');
})

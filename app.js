const express=require('express');
const path=require('path');
const cors=require('cors');
const { indexRouter }=require('./routes/index')

const app=express();

app.use('/', indexRouter);
app.use(cors());

app.listen(3000, ()=>
{
    console.log('server started on 3000');
})

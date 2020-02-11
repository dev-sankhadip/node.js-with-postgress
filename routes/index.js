const indexRouter=require('express').Router();
const { client }=require('../db/db')
const shortid=require('shortid');


indexRouter.get('/index',(request, response)=>
{
    const id=shortid.generate();
    const postgresQuery=`INSERT INTO reciepes(id, name, ingredients, directions) VALUES(${id},${'sankhadip'},${'tomato'},${'north'})`;
    client.query(postgresQuery,(err, result)=>
    {
        if(err)
        {
            return response.status(500).send({ code:500, msg:"server error" })
        }
        console.log(result);
        response.status(200).send({ code:200, result })
    })
})



module.exports={
    indexRouter
}
const { Client }=require('pg');


const client=new Client({
    user:'root',
    password:'root',
    database:'reciepebook',
    host:'localhost'
})


client.connect(function()
{
    console.log('connected');
})


module.exports={
    client
}
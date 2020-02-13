const { Client }=require('pg');


const client=new Client({
    user:'root',
    password:'root',
    database:'reciepebookdb',
    host:'localhost'
})


client.connect(function()
{
    console.log('database connected');
})


module.exports={
    client
}
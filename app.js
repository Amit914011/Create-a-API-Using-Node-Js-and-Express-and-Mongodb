const express=require('express')
const dotenv=require('dotenv')
const mongoose = require('mongoose')
const product_route=require('./route/productRoute')



dotenv.config()
const port = process.env.port || 3000;

//Data base Connected 
mongoose.connect(
    process.env.db_connect,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  ).then(() => console.log('Database connected'))
   .catch((error) => console.error('Database connection error:', error));
  


let app=express()
    app.use('/api/products',product_route)


app.listen(port,()=>{
    console.log(`Sever Is Running ${port}`)
})
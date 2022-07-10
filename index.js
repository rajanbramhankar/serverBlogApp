 const express=require('express')
// const detailsRouter2= require('./routes')
const detailsRouter1 = require('./routes/details')
 const app = express()

 app.use("/api",detailsRouter1)

 app.listen(3001,()=>{
    console.log("app is running");
 })
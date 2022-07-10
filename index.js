 const express=require('express')
// const detailsRouter2= require('./routes')
const cors = require('cors')
const detailsRouter1 = require('./routes/details')
 const app = express()
app.use(cors())
 app.use("/api",detailsRouter1)

 app.listen(  process.env.PORT || 3001,()=>{
    console.log("app is running");
 })
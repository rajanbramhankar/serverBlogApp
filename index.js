 const express=require('express')
 const app = express()
const cors = require('cors')
const detailsRouter1 = require('./routes/details')
app.use(cors())
 app.use("/api",detailsRouter1)

 app.listen(  process.env.PORT || 6565,()=>{
    console.log("app is running");
 })
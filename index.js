const express= require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const ConnectDb = require('./Config/db')
const uploadeRouter = require('./routes/uploadeRouter')
const bodyParser = require("body-parser");
const app = express()
dotenv.config()
app.use(cors({
    origin: '*'
}))

ConnectDb()
 const PORT = process.env.PORT || 3000
app.listen(3000,()=>console.log(`Listening on port ${PORT}`))
app.use(bodyParser.json());
app.get('/test',(req,res)=>{
    res.send('test for start')
})

//router

app.use('/api/uploade',uploadeRouter)

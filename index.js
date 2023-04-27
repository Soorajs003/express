const express = require('express')
const mongoose = require('mongoose')

const app = express()
const port = 3000
const bodyParser = require('body-parser')

const userRouter = require('./router/userRoutes')

mongoose
  .connect("mongodb+srv://srj:srj@cluster0.srraow7.mongodb.net/?retryWrites=true&w=majority")
  .then(() => console.log("mongoose connected"))
  .catch((err) => console.log(err));
app.use(bodyParser.json())
app.use('/user', userRouter)


app.listen(port, () => {
  console.log("sever is running");
})



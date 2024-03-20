const express= require('express');
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
//DB 
mongoose.connect('mongodb://127.0.0.1:27017/ecommerce_DB')
  .then(() => console.log('Connected!'));

//Routes
const userRoutes = require('./Router/userRoutes')
const productRoutes = require('./Router/productRoutes')
const cartRoutes = require('./Router/cartRoutes')


app.use('/api/',userRoutes)
app.use('/api/',productRoutes)
app.use('/api',cartRoutes)



//error Handling
app.use((err,req,res,next)=>{
    res.status(400).send({error:err._message,message:err.message})
})

app.listen(8000);
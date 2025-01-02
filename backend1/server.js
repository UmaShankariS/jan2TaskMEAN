const express = require('express'); 
const port = "3000"; 

const connectDB = require('./db') 
connectDB(); 


const router=require('./router') 


var app = express(); 

var bodyParser = require('body-parser')          
app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
const cors=require('cors');
app.use(cors());
app.listen(port, () => { 
    console.log(`Server Listening the ${port}`); 
}); 


app.use('/check',router); 


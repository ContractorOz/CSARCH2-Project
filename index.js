const express = require("express")
const app = new express()
app.use(express.json())
const path = require("path");

const http = require("http"); 
// //create a server object: 

// http.createServer(function (req, res){}).listen(3000);


var server = app.listen(3000,function(){});


//land here on open
app.get('/',(req,res)=> {
	res.sendFile(__dirname+ "/routes/home.html");
})
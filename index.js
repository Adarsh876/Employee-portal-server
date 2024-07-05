// import json server
const jsonServer = require("json-server")

// create json server
const employeeServer = jsonServer.create()

// set path for json file
const router = jsonServer.router('db.json')

// middleware
const middleware = jsonServer.defaults()

// server use middleware and router
employeeServer.use(middleware)
employeeServer.use(router)

//set port number
const port = 3000 || process.env.port

// listen
employeeServer.listen(port,()=>{
    console.log(`Employee server running successfully at port number ${port}`);
})
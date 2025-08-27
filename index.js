// Note: nodemon package for auto-reloading during development
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser (for permission issues on Windows)
//  commonjs in package.json for Node.js compatibility (now we use require) if we not define then bydefault it is commonjs
// start script in package.json: "start": "nodemon index.js", now we can run the server using `npm start`


// to use .env variables
require("dotenv").config();
// ...................................................................................................
// /////////////////////////////////////////////////////// MODULES in Node.js

// default export in Node.js using CommonJS module system
// const addToCart = require("./cartModule");

// named exports in Node.js using CommonJS module system
// const { addToCart, changeQty } = require("./cartModule");

// console.log("Welcome to the application!");

// console.log(addToCart())
// console.log(changeQty())


// ...................................................................................................
/////////////////////////////////////////////////////////// Create Server in Node.js

// const http = require("http");

// let server = http.createServer((req, res) => {

//     if(req.url == "/news") { // http://localhost:8000/news 

//         let obj = {
//             status:1,
//             data:[
//                 { id: 1, title: "News 1" },
//                 { id: 2, title: "News 2" },
//                 { id: 3, title: "News 3" }
//             ]
//         }
//         res.end(JSON.stringify(obj)); 
//     }

//     if(req.url == "/about") { // http://localhost:8000/about 
//     }

//     if(req.url == "/") { // http://localhost:8000
//     }

//     res.end("Welcome to the Node.js Server!");
// });

// server.listen(8000); // now we can access the server at http://localhost:8000


// ...................................................................................................
/////////////////////////////////////////////////////////// Create Server with Express.js

let express = require("express");
const { checkToken } = require("./checkTokenMiddleware");

let app = express();
// if we want to parse JSON data from request body, we need to use express.json() middleware
// this middleware will parse the JSON data and make it available in req.body
app.use(express.json()); // middleware to parse JSON data from request body


// ....................................................................................................
/////////////////////////////////////////////////////////// Middleware in Express.js

const myToken = process.env.MYToken;
const myPassword = "123";

// next is a function which is used to call the next middleware or route handler
// if we don't call next() then the request will be left hanging and the client will not receive any response
// const checkToken = (req, res, next) => {
//     // console.log("Middleware 1 executed");
//     // let token = req.headers.token; // get token from request headers
//     // if (token == myToken) {
//     //     next(); // call next middleware or route handler
//     // } else {
//     //     res.status(401).send({ // 401 is the status code for unauthorized
//     //         status: 0,
//     //         message: "Unauthorized"
//     //     })
//     // }
//     if(req.query.token == undefined || req.query.token == ""){
//        return res.send({
//             status:0,
//             msg:"Please Fill the token"
//         })
//     }
//     if(req.query.token != myToken){
//         return res.send({
//             status:0,
//             msg:"Please Fill the correct token"
//         })
//     }
//     next();
// }

// app.use(checkToken); // application level middleware, it will be executed for all routes
// // after this line, any route will not work if the next() is not called in the middleware


// // Another Middleware

// app.use((req,res,next)=>{
//     if(req.query.password == undefined || req.query.password == ""){
//        return res.send({
//             status:0,
//             msg:"Please Fill the password"
//         })
//     }
//     if(req.query.password != myPassword){
//         return res.send({
//             status:0,
//             msg:"Please Fill the correct password"
//         })
//     }
//     next();
// })




// get method is used to display data

app.get("/", (req, res) => { // http://localhost:8000/
    // no need of json.stringify , express does it automatically
    res.send({
        status: 1,
        message: "Home page api"
    });
})

// ....................................................................................................
/////////////////////////////////////////////////////////// Route Level Middleware in Express.js

// route level middleware, it will be executed only for this route
app.get("/news", checkToken, (req, res) => {
    res.send({ status: 1, message: "News page api" })
})


// ....................................................................................................
// /////////////////////////////////////////////////////// Dynamic Routes in Express.js


// dynamic route with parameter eg: http://localhost:8000/news/1
app.get("/news/:id", (req, res) => {
    // req.params is an object containing the route parameters
    console.log(req.params.id); // current id, '1' if URL is /news/1
    res.send({
        status: 1,
        message: "News detail page api",
        // data from request params
        paramsData: req.params
    })
})

app.post("/login", (req, res) => {
    console.log(req.body); // always object

    // if status is 200 then it is success
    res.status(200).send({ // 200 is the status code for success
        status: 1,
        message: "Login successful",
        // data from request body
        bodyData: req.body,
        // query parameters in URL (eg localhost:8000/login?username=abc&password=123) (query data used for searching, filtering, sorting, pagination etc.)
        queryData: req.query
    })

    // res.send({
    //     status: 1,
    //     message: "Login page api",
    //     bodyData: req.body,
    //     queryData: req.query
    // })
})

app.post("/login", (req, res) => { // http://localhost:8000/login
    res.send({ status: 1, message: "Login api" })
})

app.listen(process.env.PORT || 5000)

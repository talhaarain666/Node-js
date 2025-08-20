// Note: nodemon package for auto-reloading during development
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser (for permission issues on Windows)
//  commonjs in package.json for Node.js compatibility (now we use require) if we not define then bydefault it is commonjs
// start script in package.json: "start": "nodemon index.js", now we can run the server using `npm start`

// ....................................................... CLASS 1 ............................................
// /////////////////////////////////////////////////////// MODULES in Node.js

// default export in Node.js using CommonJS module system
// const addToCart = require("./cartModule");

// named exports in Node.js using CommonJS module system
// const { addToCart, changeQty } = require("./cartModule");

// console.log("Welcome to the application!");

// console.log(addToCart())
// console.log(changeQty())


// ....................................................... CLASS 2 ............................................
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


// ....................................................... CLASS 3 ............................................
/////////////////////////////////////////////////////////// Create Server with Express.js

let express = require("express");

let app = express();
app.use(express.json()); // to parse JSON data in request body

app.get("/", (req, res) => { // http://localhost:8000/
    // no need of json.stringify , express does it automatically
    res.send({
        status: 1,
        message: "Home page api"
    });
})

app.get("/news", (req, res) => {
    res.send({ status: 1, message: "News page api" })
})


// ........................................................ CLASS 4 ............................................
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

app.listen(8000)
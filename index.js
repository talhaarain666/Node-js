// Note: nodemon package for auto-reloading during development
// Set-ExecutionPolicy RemoteSigned -Scope CurrentUser (for permission issues on Windows)
//  commonjs in package.json for Node.js compatibility (now we use require) if we not define then bydefault it is commonjs


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

// let express = require("express")
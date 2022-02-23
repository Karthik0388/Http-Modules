const http = require("http");
const fs = require("fs");

//! examples for GET Method

//?Es6 module
// import { createServer } from "http";
// import { createReadStream } from "fs";

// ?creating a server
// let port = 5000;
// let server = http.createServer((req, res) => {
//     console.log(res);
//     res.end(" Server giving response to the client HAPPY...")
// });
// server.listen(port, err => {
//     if (err) throw err;
//     console.log("Server is running on port number", port)
// });

//? creating a server Get request
// let server = http.createServer((req, res) => {
//   //?Set header
//   res.setHeader("Content-Type", "text/html");
//   fs.readFile("./index.html", "utf-8", (err, data) => {
//     if (err) throw err;
//     res.end(data)
//   });
// });

// server.listen(5000, err => {
//   if (err) throw err;
//   console.log("Server is running on port number 5000");
// });

//?creating a server Get res with html and css

// let server = http.createServer((req, res) => {
//     if (req.url === "" || req.url === "/") {
//         //set header
//         res.setHeader("Content-Type", "text/html");
//         // response body
//         fs.createReadStream('./index.html', 'utf-8').pipe(res);
//     } else if (req.url === '/style.css') {
//         res.setHeader('Content-Type', 'text/css');
//         // response body
//         fs.createReadStream('./style.css','utf-8').pipe(res)
//     } else {
//         res.end(`<h1 style="color:red">Page not found</h1>`)
//     }
// })
// let port = 8000;

// server.listen(port, err => {
//     if (err) throw err;
//     console.log(`server is running on ${port}`);
// });

// ? using Es6 Module
// createServer((req, res) => {
//   let employees = [
//     {
//       emp_name: "Divya",
//       emp_id: "type1",
//       emp_salary: 20000,
//       emp_status: "single",
//     },
//     {
//       emp_name: "Gokul",
//       emp_id: "type2",
//       emp_salary: 300000,
//       emp_status: "committed",
//     },
//   ];

//   //? setHeader
//   res.setHeader("content-type", "application/json");
//   //? send response to client
//   res.end(JSON.stringify(employees));
// }).listen(5000, err => {
//   if (err) throw err;
//   console.log("server is running on port number 5000");
// });

//? sending response as mp3 and mp4
// let server = http.createServer((req, res) => {
//   //? setheader
//   res.setHeader("content-type", "audio/mp3");
//   //? send response to client
//   let data = fs.readFileSync("./Bgm.mp3");
//   res.end(data);
// }).listen(5000, err => {
//     if (err) throw err;
//     console.log("server is running on port number 5000");
// })

//? All types of responses are in one server
// let server = http.createServer((req, res) => {
//     res.setHeader('content-type', 'text/html');
//     let path = '';
//     switch (req.url) {
//       case "/":
//         path += "./index.html";
//         break;
//       case "/style.css":
//         path += "./style.css";
//         res.setHeader("content-type", "text/css");
//         break;
//       case "/api":
//         path += "./package.json";
//         res.setHeader("content-type", "application/json");
//         break;
//       case "/audio":
//         path += "./Bgm.mp3";
//         res.setHeader("content-type", "audio/mp3");
//         break;
//       case "/video":
//         path += "./video.mp4";
//         res.setHeader("content-type", "video/mp4");
//         break;

//       default:
//         path +='./pageNotFound.html';
//     }
//     fs.createReadStream(path).pipe(res)
// })

// server.listen(5000, err => {
//     if (err) throw err;
//     console.log("server is running on port number 5000");
// });

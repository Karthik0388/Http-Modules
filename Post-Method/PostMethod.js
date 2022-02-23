import http from "http";
import fs from "fs";
import { parse } from "querystring";
import crypto from 'crypto';



//? creating a server and capturing user information
let server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        //=============For urlencoding======================
        // setPOST FORM HEADER
        let URL_ENCODED = 'application/x-www-form-urlencoded'
        if (req.headers['content-type'] === URL_ENCODED) {
            // send body to server call events
            let body = [];
            req.on('data', chunk => {
                body += chunk;
            });
            // end event
            req.on('end', _ => {
                console.log(body);
                res.end(`SuccessFully logged in ${body}`);
            })
        } else {
            res.end(null)
        }
        //=============For urlencoding======================
    } else {
        if (req.url === '' || req.url === '/') {
            res.setHeader('content-type', 'text/html');
            fs.createReadStream('./index.html','utf-8').pipe(res)
        } else if (req.url === '/style.css') {
            res.setHeader('content-type', 'text/css');
            fs.createReadStream('./style.css','utf-8').pipe(res)
        } else {
            res.end('<h1 style="color:red">Page Not Found</h1>')
        }
    }
 });

server.listen(5000, err => {
    if (err) throw err;
    console.log("server is running on port number 5000");
})

//? creating a server and capturing user information With status codes

let server = http.createServer((req, res) => {
    if (req.method === 'POST') {
        let URLENCODED = 'application/x-www-form-urlencoded'
        if (req.headers["content-type"] === URLENCODED) {
            let body = "";
            req.on('data', chunk => {
                body += chunk;
            })
            req.on('end', _ => {
                res.statusCode = 201;
                res.statusMessage = "Created";
                res.end(`successfully signed in `);
              let finalParsedBody = parse(body);
              let passwordHashed = finalParsedBody.password;
              let hashed = crypto.createHash('sha256',passwordHashed).update('updating password').digest('hex')
                console.log(hashed);
            })
        } else {
            res.end(null)
        }
    }else {
      if (req.url === "" || req.url === "/") {
        res.statusCode = 200;
        res.statusMessage = "OK";
        res.setHeader("content-type", "text/html");
        fs.createReadStream("./index.html", "utf-8").pipe(res);
      } else if (req.url === "/style.css") {
        res.writeHead(200, "OK", { "content-type": "text/css" });
        fs.createReadStream("./style.css", "utf-8").pipe(res);
      } else {
        res.statusCode = 404;
        res.statusMessage = "Page Not Found";
        res.end('<h1 style="color:red">Page Not Found</h1>');
      }
    }
})

server.listen(5000, err => {
    if (err) throw err;
    console.log("server is running on port 5000");
})
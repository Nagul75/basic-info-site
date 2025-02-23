const http = require('http')
const fs = require('fs/promises')
const url = require('url')
const path = require('path')

http.createServer(async (req, res) => {
    if (req.url == "/") {
        try {
            const data = await fs.readFile("index.html")
            res.writeHead(200, {"Content-Type": "text/html"})
            res.end(data)
        }
        catch(err) {
            console.log(err)
        }
    }
    else if(req.url == "/about") {
        try {
            const data = await fs.readFile(path.join(".", "public", "about.html"))  //path: ./public/about.html
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        }
        catch(err) {
            console.log(err)
        }
    }
    else if(req.url == "/contact") {
        try {
            const data = await fs.readFile(path.join(".", "public", "contact-me.html"))  //path: ./public/about.html
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        }
        catch(err) {
            console.log(err)
        }
    }
    else {
        try {
            const data = await fs.readFile(path.join(".", "public", "404-error.html"))  //path: ./public/about.html
            res.writeHead(200, {"Content-Type" : "text/html"})
            res.end(data)
        }
        catch(err) {
            console.log(err)
        }
    }
}).listen(8080)


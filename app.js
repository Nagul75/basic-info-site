const express = require('express')
const path = require('path')
const app = express()

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname,"public", "about.html"))
})

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname,"public", "contact-me.html"))
})

app.get('*', function(req, res){
    res.status(404).send('what???');
  });


app.listen(3001, () => {
    console.log(`listening on port ${3001}`)
})

const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express()
const port = 3000

/* Metode Pertama Middleware 
const zefri = (req, res, next) => {
    console.log("via zefri")
    next()
}
*/

/* Metode Panggil Variable Middleware
app.get("/olivia",zefri, (req, res) => {
    res.send("Hai saya Olivia")
})

app.get("/drian",zefri, (req, res) => {
    res.send("Ini Drian")
})
*/

const middleware = (req, res, next) => {
    if (req.query.via == "zefri") {
        next()
        console.log("Anda masuk via zefri")
    }
    else {
        res.send("Dilarang!")
        console.log("Tidak Bisa Masuk")
    }
}

app.use(middleware) 

app.get("/", (req,res) => {
    res.send("Main Utama")
})

app.get("/olivia", (req, res) => {
    res.send("Hai saya Olivia")
})

app.get("/drian", (req, res) => {
    res.send("Ini Drian")
})

app.get("/zefa", (req, res) => {
    res.send("ini azefa")
})

app.get("/papah", (req, res) => {
    res.send("ini papah")
})

app.get("cheryl", (req, res)=> {
    res.send("ini cheryl")
})
app.listen(port, () => console.log("server starting..."))
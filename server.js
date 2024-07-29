const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express()
const port = 80

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
        res.send("Dilarang Masuk!")
        console.log("Tidak Bisa Masuk")
    }
}

app.use(middleware) 

app.get("/", (req,res) => {
    res.send("Main Utama")
    console.log("----masuk ke menu main----")
})

app.get("/olivia", (req, res) => {
    res.send("Hai saya Olivia")
    console.log("----masuk ke menu olivia----")
})

app.get("/drian", (req, res) => {
    res.send("Ini Drian")
    console.log("----masuk ke menu drian----")
})

app.get("/frost", (req, res) => {
    res.send("ini frost")
    console.log("----masuk ke menu frost----")
})

app.get("/patrzalek", (req, res) => {
    res.send("ini patrzalek")
    console.log("----masuk ke menu patrzalek----")
})

app.get("/cheryl", (req, res)=> {
    res.send("ini cheryl")
    console.log("----masuk ke menu cheryl----")
})
app.listen(port, () => console.log("server starting...(Worked!!)"))

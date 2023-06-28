const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app = express()

/* Metode Pertama Middleware
const zefri = (req, res, next) => {
    console.log("via zefri")
    next()
}
*/

/* Metode Panggil Variable Middleware
app.get("/olivia",middleware, (req, res) => {
    res.send("Hai saya Olivia")
})

app.get("/drian",middleware, (req, res) => {
    res.send("Ini Drian")
})
*/

const middleware = (req, res, next) => {
    if (req.query.via == "zefri") {
            next()
    }
    else {
        res.send("Dilarang!")
    }
}

app.use(middleware)

app.get("/olivia", (req, res) => {
    res.send("Hai saya Olivia")
})

app.get("/drian", (req, res) => {
    res.send("Ini Drian")
})

app.listen(80, () => console.log("server starting..."))
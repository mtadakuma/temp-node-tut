const http = require('http');

//Req is what the user is requesting
//res is what we're sending back
const server = http.createServer((req, res) => {
    //console.log(req)
    if (req.url === '/') {
        res.end('Welcome to our home page')
    }
    if (req.url === '/about') {
        res.end('Here is our short story')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>There's no page.</p>
    <a hred="/">back home</a>
    `)
})

server.listen(5000)
const http = require('http')
const dotenv = require('dotenv')
dotenv.config()

const getUsers = require('./modules/users')
const PORT = process.env.PORT || 3000
const ORIGIN = process.env.ORIGIN

const server = http.createServer((req, res) => {
    const params = new URL(req.url, ORIGIN).searchParams

    if(params.has('users')) {
        res.writeHead(200, "OK", {
            'Content-type': 'application/json'
        })
        res.end(getUsers())
    }

    if(params.has('hello')) {
        const value = params.get('hello')
        if(!value) {
            res.writeHead(400, {
                'Content-type': 'text/plain'
            })
            res.end(`Enter a name`)
       } 

        if(value) {
            res.writeHead(200, {
                'Content-type': 'text/plain'
            })
            res.end(`Hello, ${value}`)
        }
    }

    res.end()
})

server.listen(PORT, () => {
    console.log(`Server works on ${ORIGIN}:${PORT}`);
})

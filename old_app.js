const http = require('http')
const fs = require('fs')
const port = 8000

const server = http.createServer(function(req, res){
    res.writeHead(200, { 'Content-Type':'text/html' })
    fs.readFile('pages/home.html', function(error, data) {
        if(error) {
            res.writeHead(404)
            res.write('Error: FileNotFound') //TODO filenotfound page
        } else {
            res.write(data)
        }
        res.end()
    }) 

})

server.listen(port, function(error) {
    if(error) {
        console.log('Error found' , error)
    } else {
        console.log('Server is running on ' + port)
    }
})
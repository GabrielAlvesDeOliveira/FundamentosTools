const http = require('http')
const server = http.createServer(function(req, res){
    res.writeHead(200, {'Content-Type': 'Text/html'})
    res.end('<h1> melhor o express!!! </h1>')
})

const porta = 3000
server.listen(porta, function(){
    console.log(`Rodando na porta ${porta}`)
})
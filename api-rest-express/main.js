const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200, {
        'Content-Type': 'text/plain'
    });
    response.write('Gustavo Cardoso');
    response.end();
}).listen(3021, () => {
    console.log('Servidor rodando em http://localhost:3021/');
});
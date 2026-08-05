import http from 'http';
import fs from 'fs';

const servidor = http.createServer((req, res) =>{
    console.log("URL:", req.url);

    if (req.url === '/') {
        fs.readFile('index.html', (erro, dados) => {
            if (erro) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Erro ao carregar index.html');
            }

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(dados);
        });
    } else if (req.url === '/sobre') {
        fs.readFile('sobre.html', (erro, dados) => {
            if (erro) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Erro ao carregar index.html');
            }

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(dados);
        });
    } else if (req.url === '/contato') {
        fs.readFile('contato.html', (erro, dados) => {
            if (erro) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                return res.end('Erro ao carregar index.html');
            }

            res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
            res.end(dados);
        });
    }

});

servidor.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
});
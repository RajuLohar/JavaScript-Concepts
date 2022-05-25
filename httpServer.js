const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        res.write('Chal gya');
        res.end();
    }

})

server.listen(3000);
console.log("port is on");
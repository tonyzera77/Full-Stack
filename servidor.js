
let http = require('http');
let express = require('express');

let app = express();

app.use(express.static("public"));

let server = http.createServer(app);

server.listen(80, "0.0.0.0", function() {
    console.log("Servidor rodando na porta 80");
});

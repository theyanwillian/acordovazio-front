const express = require('express');
const app = express();

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/a-cor-do-vazio'));

app.get('/*', (req, res) =>{
  res.sendFile(__dirname + '/dist/a-cor-do-vazio/index.html')
});

var server_port = process.env.YOUR_PORT || process.env.PORT || 8080;
var server_host = process.env.YOUR_HOST || '0.0.0.0';
app.listen(server_port, server_host, function() {
    console.log('Listening on port %d', server_port);
});

// app.listen(PORT, () =>{
//     console.log('Servidor iniciado na porta ' + PORT);
// });

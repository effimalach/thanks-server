const {createServer} = require ('http');
function onRequest(req,res) {
    res.end('thanks');
};
const server = createServer(onRequest);
server.listen(5000,()=>console.log('listenning to port 5000'));


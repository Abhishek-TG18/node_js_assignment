const http = require('http');

const server=http.createServer((req,res)=>{
    res.writeHead(500,{ 'content-Type':'text/html'});

    res.write("<h1> I Am Happy To Learn Full Stack Development From PW Skills!</h1>");
    res.end();
});

server.listen(5000,()=>{
    console.log(   "server is running on loalhost:5000");
})
const fs = require('fs');

fs.writeFile('nodejs_artitecture', 'Node.js architecture is built on a single-threaded, event-driven model with non-blocking I/O, allowing it to handle multiple requests simultaneously. The event loop efficiently processes asynchronous operations like file I/O, database queries, and networking, making Node.js highly scalable and suitable for real-time, data-intensive applications.', 
    function(err){
        if(err){
            console.log("ERROR OCCURED :",err);
        }else{
            console.log("written sucessfully");
        }
    }
)
const buf = new Buffer(1024);
fs.open('nodejs_artitecture','r+',function(err,fd){
    if(err){
        console.log(err);
    }else{
        console.log("file opened");
    }

    fs.read(fd,buf,0,buf.length,0,function(err,data){
        if(err){
            Cconsole.log(err);
        }else{
            console.log("bytes",data);
            console.log('data: ',buf.slice(0,data).toString());
        }
    })

})
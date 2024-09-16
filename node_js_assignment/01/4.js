const fs = require('fs');

fs.appendFile('nodejs_artitecture.txt', 
    'Advantages of Node.js architecture include high scalability due to its non-blocking, event-driven model, which efficiently handles many concurrent connections. It\'s ideal for real-time applications like chat and streaming. Its single-threaded design reduces overhead, while JavaScript support on both client and server simplifies full-stack development.', 
    function(err) {
        if (err) {
            console.log("ERROR OCCURRED:", err);
        } else {
            console.log("Written successfully");
        }
    }
);

const buf = Buffer.alloc(1024);

fs.open('nodejs_artitecture.txt', 'r+', function(err, fd) {
    if (err) {
        console.log(err);
    } else {
        console.log("File opened");

        fs.read(fd, buf, 0, buf.length, 0, function(err, bytesRead) {
            if (err) {
                console.log(err);
            } else {
                console.log("Bytes read:", bytesRead);
                console.log('Data:', buf.slice(0, bytesRead).toString());
            }

            // Properly close the file
            fs.close(fd, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log("File closed");
                }
            });
        });
    }
});

// UNLINKING NODEJS_ARTITECTURE FILE

const fs = require('fs');

fs.unlink('nodejs_artitecture.txt', function(err) {
    if (err) {
        console.log("Error occurred: ", err);
    } else {
        console.log("File Deleted Successfully");
    }
});

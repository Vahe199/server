const express = require('express');
let app = express()
const path = require('path');
let port =  process.env.PORT || 8372;

app.use(express.static(path.join(__dirname, 'build')));

app.listen(port, function() {
    console.log('Express server listening on port ' + port);
});

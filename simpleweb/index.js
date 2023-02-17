const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('request received ' + req)
    res.send('hi there');
})

app.listen(8080, () => {
    console.log('listening on port 8080');
});
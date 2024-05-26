const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({hi: 'there'});
});
//heroku looks for the underlying environment to see if there is a port to use
const PORT = process.env.PORT || 5000;
app.listen(5000);
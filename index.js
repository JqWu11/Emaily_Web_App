const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send({Justin: 'Wu'});
});
//heroku looks for the underlying environment to see if there is a port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
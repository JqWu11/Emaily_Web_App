const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
require('./models/users');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

require('./routes/authRoutes')(app);

//heroku looks for the underlying environment to see if there is a port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});


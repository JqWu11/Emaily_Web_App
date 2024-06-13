const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const bodyParser = require('body-parser');
const keys = require('./config/keys');
require('./models/users');
require('./models/Survey');
require('./services/passport');


mongoose.connect(keys.mongoURI);


const app = express();

app.use(bodyParser.json());
app.use(
cookieSession({
maxAge: 30 * 24 * 60 * 60 * 10000,
keys: [keys.cookieKey]
})
);
app.use(passport.initialize());
app.use(passport.session());


require('./routes/authRoutes')(app);
require('./routes/billingRoutes')(app);
require('./routes/surveyRoutes')(app);

if(process.env.NODE_ENV === 'production'){
    //express will serve up produciton assets for some file
    app.use(express.static('client/build'));
    //Express serves up the index.html file it the
    //route is not recognied
    const path = require('path');
    app.get('*',(req,res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

//heroku looks for the underlying environment to see if there is a port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
console.log(`Our app is running on port ${ PORT }`);
});


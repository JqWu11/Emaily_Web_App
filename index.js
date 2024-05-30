const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport');
const keys = require('./config/keys');
require('./models/users');
require('./services/passport');

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
    cookieSession({
        maxAge: 30 * 24 * 60 * 60 * 10000,
        keys: [keys.cookieKey]
    })
);
app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app);

//heroku looks for the underlying environment to see if there is a port to use
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});

//connection string: mongodb+srv://jqwu11:X5GHW5FY01Es0ouW@cluster0.gijloyd.mongodb.net/emailyprod?retryWrites=true&w=majority&appName=Cluster0
//client secret: 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
//client id: 189093211742-58untkhtcbqqheko0q27iks7ksvllmrf.apps.googleusercontent.com
//arbitrary string: iuhfeqwiuhfeoqifehwi
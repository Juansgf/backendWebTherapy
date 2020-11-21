const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const path = require('path')
const mongoose = require('mongoose');
const config = require('./config/db');
const rtsIndex = require('./routes/principal');

// Connect To Database
mongoose.connect(config.database, { useNewUrlParser: true, useUnifiedTopology: true });

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')))

// middleware

app.use(cors());

app.use('/user', rtsIndex);

app.use(passport.initialize());
app.use(passport.session());


require('./config/passport')(passport);
//app.use('/posts', rtsIndex);

// Port Number
const PORT = process.env.PORT || 3003;
app.get('*', (req, res) =>{
  console.log("Respondiendo")
  res.sendFile('./public/index.html')
})
// Start Server
app.listen(PORT, () => {
    console.log('Server started on port '+ PORT);
});
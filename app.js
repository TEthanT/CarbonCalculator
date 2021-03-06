const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.static('public'));

app.set('view engine', 'ejs');
app.use(express.json());

const searchRoutes = require('./routes/search');
app.use('/search', searchRoutes);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/pages/home.html');
});

app.listen(port, function() {
    console.log(`Listening on port ${port}...`);
})
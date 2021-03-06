const express = require('express');
const router = express.Router();

var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const foods = [
    { id: 1, name: 'apple', footprint:'10'},
    { id: 2, name: 'orange', footprint: '5'},
    { id: 3, name: 'banana', footprint: '7'}
];

router.get('/', function(req, res) {
    const food = foods.find(function(c) {
        return c.name === req.query.q;
    });
    if (food) {
        res.render('search', {data: food});
    } else {
        res.sendFile('/public/pages/search_error.html', {
            root: './'
        });
    };
});

module.exports = router;
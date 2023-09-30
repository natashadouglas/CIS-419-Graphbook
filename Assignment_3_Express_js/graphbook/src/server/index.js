import express from 'express';
const app = express();

app.get('/', function (req, res, next){
        // Random number generator to use Math.ceil and to produce numbers that are multiples of 4 within the range 4 to 100 inclusive.
        var random = Math.ceil(Math.random() * 25) * 4;
        
        if (random > 50) next('route') // Numbers 5 to 50 with a range up to 100.
        else next()
}, function (req, res, next) {
        res.send('first');
})

app.get('/', function (req, res, next) {
        res.send('second');
})

app.listen(8000, () => console.log('Listening on port 8000!'));


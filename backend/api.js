const express = require('express');

const app = express();

app.use(express.json());
app.get('/', (req, res) => {
    const data = [
        {
            id: '1',
            title: 'Store app'
        },

        {
            id: '2',
            title: 'CSV file processor'
        },


        {
            id: '3',
            title: 'Paypal express'
        },


        {
            id: '4',
            title: 'Simple mpesa php library'
        },


        {
            id: '5',
            title: 'Lipa payments',
            sub: 'module for drupal 8'
        },
    ]
    res.json(data)
})


const port = process.env.PORT || 3000;


app.listen(port, () => {
    console.log('app open on port :::::: ', port);
});

module.exports = port;


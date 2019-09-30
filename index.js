const express = require('express');
const app = express();
const axios = require('axios');
const bodyParser = require('body-parser');
const { statistics, message} = require('./processStatistic');


app.use(
    bodyParser.urlencoded({
      extended: true
    })
  )
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const data = statistics
    const msg = message;
    console.log("index data",data);
    console.log(msg);
    res.send(data)
})

app.get('/test', (req, res) => {
    axios({
        url: 'https://bitbucket.org/!api/2.0/snippets/tawkto/aA8zqE/4f62624a75da6d1b8dd7f70e53af8d36a1603910/files/webstats.json',
        method: 'get'
    }).then(function (response) {
        const data = JSON.stringify(response.data)
        res.send(data) 
    })
    .catch(function (error) {
        const data = JSON.stringify(error)
        console.log(data)
        // res.status(500).send({ "error": error });
    });
})




const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening port ${port}`)
})
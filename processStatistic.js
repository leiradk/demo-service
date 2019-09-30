const axios = require('axios');
const JSON = require('circular-json');

function  statistics() {
    axios({
        url: 'https://bitbucket.org/!api/2.0/snippets/tawkto/aA8zqE/4f62624a75da6d1b8dd7f70e53af8d36a1603910/files/webstats.json',
        method: 'get'
    }).then(function (response) {
        data = JSON.stringify(response.data);
        return data
    })
    .catch(function (error) {
        data = JSON.stringify(error);
        return data
    });
}

const message = "Hellow world message"

module.export = {
    statistics: statistics,
    message: message
};

module.export.statistics = statistics;
module.export.message = message;

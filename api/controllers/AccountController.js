var axios = require('axios');
var data = require('../resources/user.json')

exports.data = async (req, res) => {
    res.json(data);
}

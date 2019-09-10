const axios = require('axios');

module.exports = {

    async name(req, res){
        const {name} = req.headers;

        response = await axios.get(`https://api.github.com/search/users?q=${name}`); 
        return res.status(200).json(response.data.items);

    }

}




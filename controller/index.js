const showResult = require('../utils/modules');

exports.view = async function (req, res) {
    const timestamp = req.params.timestamp;
    
    if(Date.parse(timestamp)){
        return await showResult.parsetime(timestamp);
    }
    else if(new Date (Number(timestamp)) != 'Invalid Date'){
        return await showResult.unixtime(timestamp);
    }
    else {        
        return await showResult.nontime();
    }    
}
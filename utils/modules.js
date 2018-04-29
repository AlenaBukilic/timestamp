const strftime = require('strftime');

exports.parsetime = async function(time) {
    return await {
        unixtime: Date.parse(time),
        natural: time
    }
}

exports.unixtime = async function(time) {
    const date = strftime('%B %d, %Y',new Date(Number(time)));

    return await {
        unixtime: time,
        natural: date
    }
}

exports.nontime = async function(){
    return await {
        unixtime: null,
        natural: null
    }
}
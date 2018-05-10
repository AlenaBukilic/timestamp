'use strict';

const Hapi = require('hapi');

const routes = require('./routes/index');

require('dotenv').config({ path: 'config/variables.env' });

const server = Hapi.server({
    host:'localhost',
    port: PORT
});

server.route(routes);

async function start() {
    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();

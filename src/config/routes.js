const express = require('express');

module.exports = function(server) {

    // API Routes
    const router = express.Router();
    server.use('/api', router);

    // TRELL Routes
    const trellService = require('../api/trel/trelService');
    trellService.register(router, '/trel');
}
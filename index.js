const server = require('./src/config/server');
require('./src/config/database');
require('./src/config/routes')(server)
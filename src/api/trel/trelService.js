const Trel = require('./trel');

Trel.methods(['get', 'post', 'put', 'delete']);
Trel.updateOptions({ new: true, runValidators: true });

module.exports = Trel;
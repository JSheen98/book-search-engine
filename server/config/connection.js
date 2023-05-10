const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/googlebooks');
// grab this URI^

module.exports = mongoose.connection;

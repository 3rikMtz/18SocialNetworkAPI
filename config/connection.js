// Import the required functions from mongoose
const { connect, connection } = require('mongoose'); 

// Export the connection to be used elsewhere
module.exports = connection;

// Establish a connection to the MongoDB database at the specified location
connect('mongodb://127.0.0.1:27017/socialNetwork');

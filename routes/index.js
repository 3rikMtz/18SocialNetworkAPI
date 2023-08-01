const router = require('express').Router(); 
const apiRoutes = require('./api'); 

// Handle wrong routes
router.use((req, res) => res.send('Wrong route!'));

// Use API routes
router.use('/api', apiRoutes); 

module.exports = router; 

const express = require('express');

const router = express.Router();

// @Route GET api/profile
// @desc Test route
// @access public

router.get('/', (req, res) => res.send('Profile Route'));

module.exports = router;

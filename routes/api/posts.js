const express = require('express');

const router = express.Router();

// @Route GET api/posts
// @desc Test route
// @access public

router.get('/', (req, res) => res.send('Post Route'));

module.exports = router;

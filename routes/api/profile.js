const express = require('express');
const Profile = require('../../models/Profile');
const User = require('../../models/User');

const router = express.Router();
const auth = require('../../middleware/auth');

// @Route GET api/profile/me
// @desc Get current users profile
// @access private

router.get('/', async (req, res) => {
  try {
    const profile = await Profile.findOne({ user: req.user.id }).populate(
      'user',
      ['name', 'avatar']
    );

    if (!profile) {
      return res
        .status(400)
        .json({ msg: 'there is no profile for this user!!!' });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;

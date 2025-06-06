


// routes/profile.routes.js
const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth.middleware.js');
const { getProfile, updateProfile, deleteProfile } = require('../controllers/profile.controller.js');

router.get('/profile/:id', auth, getProfile);
router.put('/profile/:id', auth, updateProfile);
router.delete('/profile/:id', auth, deleteProfile);

module.exports = router;

const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models');
const { requireAuth } = require('../../utils/auth');


// Route for New Story
router.get('/', asyncHandler(async(req, res) => {
    const allStories = await db.Story.findAll({})
    return res.json(allStories);
}));

module.exports = router;
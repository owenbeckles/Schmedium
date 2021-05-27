const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models');

// Delete User Posts
router.delete('/individualstories', asyncHandler(async (req,res) => {
    const storyId = req.params.id 
    const story = await Story.findbyPk(storyId);
    await story.destroy();
    return res.json({ success: 'Your story was deleted.'})
}));




module.exports = router;
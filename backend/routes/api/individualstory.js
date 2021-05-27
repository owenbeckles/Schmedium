const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models');

// Delete User Posts
router.delete('/:id', asyncHandler(async (req,res) => {
    const storyId = req.params.id;
    const story = await db.Story.findByPk(storyId);
    await story.destroy();
    return res.json({ success: 'Your story was deleted.'})
}));

// Edit User Posts
router.put('/', asyncHandler(async(req, res) => {
    const { title, content } = req.body;
    const storyId = req.params.id;
    const edit = await db.Story.findByPk(storyId)

    edit.update({
        title: title,
        content: content,
    })
    return res.json(edit)

}));


module.exports = router;

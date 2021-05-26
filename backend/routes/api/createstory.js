const express = require('express');
const asyncHandler = require('express-async-handler');
const router = express.Router();

const db = require('../../db/models');

// Route for creating new stories 
router.post('', asyncHandler(async(req, res) => {
    const { title, content } = req.body;
    const userId = req.session.auth.userId;
    const newStory = await db.build({
        title,
        content,
        userId,
    })

    return res.json(newStory);
}))
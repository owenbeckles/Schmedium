const express = require('express');
const asyncHandler = require('express-async-handler');
const { check, validationResult } = require("express-validator");
const router = express.Router();

const db = require('../../db/models');
const { handleValidationErrors } = require('../../utils/validation');


const storyValidator =[
    check('title')
        .exists({checkFalsy: true})
        .withMessage("Title cannot be empty")
        .custom((value)=>{
            return db.Story.findOne({ where: {title:value}}).then((title)=>{
                if (title)
                    return Promise.reject("This title already exists");
            })
        }),
    check('content')
        .exists({checkFalsy: true})
        .withMessage("Story cannot be empty")
        .custom((value)=>{
            return db.Story.findOne({ where: {content:value}}).then((story)=>{
                if (story)
                    return Promise.reject("This story already exists");
            })
        }),
        handleValidationErrors,
    ]

// Route for creating new stories 
router.post('/', storyValidator, asyncHandler(async(req, res) => {
    const { title, content, userId } = req.body;
    const newStory = await db.Story.create({
        title,
        content,
        userId,
    })

    return res.json(newStory);
}))

module.exports = router;
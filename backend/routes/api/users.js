const express = require('express');
const asyncHandler = require('express-async-handler');

const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateSignup = [
    check('firstname')
      .exists({ checkFalsy: true })
      .withMessage("First Name cannot be empty")
      .isLength({ max: 50 })
      .withMessage("First Name must not be more than 50 characters long."),
    check('lastname')
      .exists({ checkFalsy: true })
      .withMessage("Last Name cannot be empty")
      .isLength({ max: 50 })
      .withMessage("Last Name must not be more than 50 characters long."),
    check('email')
      .exists({ checkFalsy: true })
      .isEmail()
      .withMessage('Please provide a valid email.'),
    check('username')
      .exists({ checkFalsy: true })
      .isLength({ min: 4 })
      .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
      .not()
      .isEmail()
      .withMessage('Username cannot be an email.'),
    check('password')
      .exists({ checkFalsy: true })
      .isLength({ min: 6 })
      .withMessage('Password must be 6 characters or more.'),
    handleValidationErrors,
  ];

  router.post(
    '/',
    // validateSignup,
    asyncHandler(async (req, res) => {
      const { firstname, lastname, email, password, username } = req.body;
      console.log(req.body);
      const user = await User.signup({ firstname, lastname, email, username, password });
  
      await setTokenCookie(res, user);
  
      return res.json({
        user,
      });
    }),
  );

module.exports = router;
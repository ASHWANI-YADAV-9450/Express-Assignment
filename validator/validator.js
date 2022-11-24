const { body, validationResult } = require('express-validator')
const userValidationRules = () => {
  const validate = (req,res,next)=>{
    const errors = validationResult(req)
    if (errors.isEmpty()){
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

    return res.status(422).json({
          errors: extractedErrors,
        })
  }
  
  return [
    // user first name must be
    body('username').isLength({min:2})
    .withMessage('username must have atleast 2 characters'),

    // user must have email
    body('email').isEmail()
    .withMessage('Please write correct email'),
    // password must be at least 5 chars long
    body('password')
    .isLength({ min: 5 })
    .withMessage('must be at least 5 chars long'),
        // First name must have 2 character
        body('firstName').isLength({min:2})
    .withMessage('First Name must have atleast 2 characters'),
    body('lastName').isLength({min:2})
    .withMessage('Last Name must have atleast 2 characters'),
    
  ]
}

module.exports = {
  userValidationRules
}







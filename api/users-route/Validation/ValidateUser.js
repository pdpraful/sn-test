const Joi = require('joi');
const JoiValidation = require('joi') 

function validateUser(user){
    const userSchema = Joi.object({
        FirstName: Joi.string().min(1).max(255).required(),
        LastName: Joi.string().min(1).max(255).required(),
        Email:Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
        Password:Joi.string().min(8).max(125).required(),
    }).options({ abortEarly: true, allowUnknown: true });
    return userSchema.validate(user);
}

module.exports = validateUser;
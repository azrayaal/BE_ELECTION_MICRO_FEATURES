const Joi = require('joi')

const UserScheme = Joi.object({
    fullName: Joi.string()
        .min(3)
        .max(15)
        .required(),

    address: Joi.number()
        .required(),
    
    gender: Joi.string()
        .required(),

    email: Joi.string()
        .email()
        .required(),

    userName: Joi.string()
        .required(),

    password: Joi.string()
        .required(),

})
export default UserScheme
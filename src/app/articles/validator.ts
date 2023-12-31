const Joi = require('joi')
.extend(require('@joi/date'));

const ArticleSchema = Joi.object({
    title: Joi.string()
        .min(3)
        .max(25)
        .required(),

    author: Joi.string()
        .min(3)
        .max(10)
        .required(),

    date: Joi.date().format('YYYY-MM-DD').utc(),

    description: Joi.string()
        .min(20)
        .max(1000)
        .required(),

})
export default ArticleSchema
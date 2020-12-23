const { check } = require('express-validator');

exports.categoryValidation = [
    check('categoryName', "Please enter a name minumum 2 and maximum 20 chars").isLength({ min: 2, max: 20 }),
    check('description', "Please enter a description maximum 200 chars").isLength({ max: 200 }),
]

exports.productValidation = [
    check('productName', "Please enter a name minumum 2 and maximum 20 chars").isLength({ min: 2, max: 20 }),
    check('description', "Please enter a  description maximum 200 chars").isLength({ max: 200 }),
]
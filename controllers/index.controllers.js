const ToDo = require('../models/todo.model')

// @desc        Index page
// @route       GET /
// @access      Public
exports.index = async (req, res, next) => {
     await ToDo.find({}).exec()
        .then(data => {
            console.log('Index page:', data)

            const context = {
                title: 'Express',
                data
            }

            res.render('index', context);
        })


};
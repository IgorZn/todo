const ToDo = require('../models/todo.model')

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// @desc        Index page
// @route       GET /
// @access      Public
exports.index = async (req, res, next) => {
    await ToDo.find({}).exec()
        .then(data => {
            // console.log('Index page:', data)

            const context = {
                title: 'Express',
                data
            }

            res.render('index', context);
        })

};


// @desc        Add ToDos
// @route       POST /
// @access      Public
exports.addToDo = async (req, res, next) => {
    if (Object.keys(req.body).length > 0) {
        const {name, body} = req.body

        await ToDo.create({name, body})
            .then(data => {
                console.log('ToDo.create>>', req.body)
                return res
                    .status(200)
                    .render('index', data)
            })
    } else {
        console.log('EMPTY -- addToDo>>', req.body)
        return res
            .status(200)
            .json({status: false})
    }


};
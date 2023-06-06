const ToDo = require('../models/todo.model')

// @desc        Edit ToDo
// @route       POST /edit/:id
// @access      Public
exports.editToDo = async (req, res, next) => {
    const { name, body } = req.body
    await ToDo.findByIdAndUpdate(req.params.id, {name, body})
        .exec()
        .then(toDo => {
            res
                .status(200)
                .json(toDo)
        })
}


// @desc        Get ToDo by id
// @route       GET /:id
// @access      Public
exports.getToDoById = async (req, res, next) => {
    await ToDo.findById(req.params.id)
        .exec()
        .then(toDoData => {
            const context = {
                id: toDoData._id,
                title: 'Express',
                dataJS: JSON.stringify(toDoData),
                todo: {
                    name: toDoData.name,
                    body: toDoData.body
                }
            }
            res
                .status(200)
                .render('edit', context)
        })
}
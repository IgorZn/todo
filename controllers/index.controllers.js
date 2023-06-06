const ToDo = require('../models/todo.model')
const ObjectId = require('mongoose').Types.ObjectId;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}


// @desc        Index page
// @route       GET /
// @access      Public
exports.index = async (req, res, next) => {
    await ToDo.find({})
        .sort({createdAt: -1})
        .exec()
        .then(data => {
            // console.log('Index page:', data)

            const context = {
                title: 'Express',
                dataJS: JSON.stringify(data[0]),
                data
            }

            res
                .status(200)
                .render('index', context);
        })

};


// @desc        Add ToDos
// @route       POST /
// @access      Public
exports.addToDo = async (req, res, next) => {
    if (Object.keys(req.body).length > 0) {
        const {name, body} = req.body

        await ToDo.create({name, body})
            .then(async data => {
                return await ToDo.find({})
                    .sort({createdAt: -1})
                    .exec()
                    .then(data => {
                        const context = {
                            title: 'Express',
                            data
                        }
                        return res
                            .status(200)
                            .render('index', context)

                    })
                    .catch(e => res.status(404).json({status: false, e}))
            })
    } else {
        // console.log('EMPTY -- addToDo>>', req.body)
        return res
            .status(200)
            .json({status: false})
    }
}


// @desc        Delete ToDos
// @route       DELETE /:id
// @access      Public
exports.deleteToDo = async (req, res, next) => {
    await ToDo.findByIdAndRemove(new ObjectId(req.params.id))
        .exec()
        .then(result => {
            return res
                .status(200)
                // .render('index')
                .json({status: true, result})
        })
        .catch(e => res.status(404).json({status: false, e}))

};
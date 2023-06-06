const express = require('express');
const router = express.Router();

const { index, addToDo, deleteToDo, doneToDo } = require('../controllers/index.controllers')
const {getToDoById} = require("../controllers/edit.controllers");

/* GET home page. */
router.route('/')
    .get(index)
    .post(addToDo)

router.route('/:id')
    .get(getToDoById)
    .delete(deleteToDo)
    .put(doneToDo)

module.exports = router;

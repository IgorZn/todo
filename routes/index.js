const express = require('express');
const router = express.Router();

const { index, addToDo, deleteToDo} = require('../controllers/index.controllers')

/* GET home page. */
router.route('/')
    .get(index)
    .post(addToDo)

router.route('/:id')
    .delete(deleteToDo)

module.exports = router;

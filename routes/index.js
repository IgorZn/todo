const express = require('express');
const router = express.Router();

const { index, addToDo} = require('../controllers/index.controllers')

/* GET home page. */
router.route('/')
    .get(index)
    .post(addToDo)

module.exports = router;

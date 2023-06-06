const express = require('express');
const router = express.Router();

const {editToDo} = require("../controllers/edit.controllers");


router.route('/:id')
    .post(editToDo)

module.exports = router;
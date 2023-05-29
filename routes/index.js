const express = require('express');
const router = express.Router();

const { index } = require('../controllers/index.controllers')

/* GET home page. */
router.route('/')
    .get(index);

module.exports = router;

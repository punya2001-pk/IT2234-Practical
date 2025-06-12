const express = require('express');
const router = express.Router();
const {borrowBook} = require('../service/commonService');


router.post('/borrow',borrowBook);

module.exports = router
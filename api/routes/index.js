const express = require('express');
const router = express.Router();
const conditions = require('./conditions');
const riskfactors = require('./riskfactors');
const labtests = require('./labtests');
const symptoms = require('./symptoms');
const info = require('./info');



/* GET home page. */
router.get('/', function (req, res) {
  res.send('WIMD');
});

router.use('/info',info);

router.use('/symptoms', symptoms);

router.use('/riskfactors', riskfactors)

router.use('/labtests', labtests)

router.use('/conditions', conditions)

module.exports = router;
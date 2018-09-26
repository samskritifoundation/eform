const async = require('async');
const crypto = require('crypto');
const Sloka = require('../models/Sloka');

/**
 * GET /slokas
 * List all slokas.
 */
exports.getSloka = (req, res) => {
  Sloka.find((err, docs) => {
    res.render('slokas', { slokas: docs });
  });
};



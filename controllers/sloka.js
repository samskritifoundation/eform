const async = require('async');
const crypto = require('crypto');
const Sloka = require('../models/Sloka');

/**
 * GET /slokas
 * List all slokas.
 */
exports.getSlokas = (req, res) => {
  Sloka.find((err, docs) => {
    res.render('slokas', { slokas: docs });
  });
};

/**
 * GET /sloka/:sl
 * List sloka of id
 */
exports.getSloka = (req, res) => {
  //console.log(req.params.sl)
  Sloka.findById(req.params.sl, (err, docs) => {
    //console.log(docs)
    res.render('sloka', { sloka: docs });
  });
};

/**
  * GET /editsloka/:sl
  * Edit sloka form
  */

exports.editSlokaform = (req, res) => {
  Sloka.findById(req.params.sl, (err, docs) => {
    //console.log(docs)
    res.render('editsloka', { sloka: docs });
  });
};

/**
  * POST /editsloka/:sl
  * submit form after editing sloka
  */

exports.editSloka = (req,res,next) => {
  let sloka = req.body;
  Sloka.findByIdAndUpdate(req.params.sl, {$set: sloka}, {new: true}, (err, docs) => {
    //console.log(docs)
    if (err) { return next(err); }
    req.flash('info', { msg: 'Sloka has been edited.' });
    res.redirect('/slokas');
  });
};

/**
 * POST /delsloka/:sl
 * Delete sloka.
 */
exports.delSloka = (req, res, next) => {
  Sloka.remove({ _id: req.params.sl }, (err) => {
    if (err) { return next(err); }
    req.flash('info', { msg: 'Sloka has been deleted.' });
    res.redirect('/slokas');
  });
};

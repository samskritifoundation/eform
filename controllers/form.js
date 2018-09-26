const async = require('async');
const crypto = require('crypto');
const passport = require('passport');
const Sloka = require('../models/Sloka');

/**
 * GET /form
 */
exports.getForm = (req, res) => {
  if (req.user) {
    return res.render('form', {
      title: 'Form'
    });
  }
  res.render('account/login', {
    title: 'Login'
  });
};

/**
 * GET /success
 */
exports.getSuccess = (req, res) => {
  if (req.sloka) {
    return res.render('success', {
      title: 'Form submitted'
    });
  }
};

/**
 * POST /form
 */
exports.postForm = (req, res, next) => {
  const errors = req.validationErrors();

  if (errors) {
    req.flash('errors', errors);
    return res.redirect('/login');
  }

  console.log(req.body);
  
 const sloka = new Sloka(req.body);

  Sloka.findOne({ sloka_text: req.body.sloka_text }, (err, existingSloka) => {
    if (err) { return next(err); }
    if (existingSloka) {
      req.flash('errors', { msg: 'Data for that sloka already exists' });
      return res.redirect('/form');
    }
    sloka.save((err) => {
      if (err) { return next(err); }
        res.redirect('/slokas');
      });
  });  
  req.flash('success', { msg: 'Form submitted successfully!' });
    res.redirect('/form');
};

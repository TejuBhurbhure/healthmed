const Doctor = require('../models/doctorModel');
const catchAsync = require('../utils/catchAsync');


exports.getHomepage = catchAsync(async(req, res, next) => {
    const doctor = await Doctor.findOne({ slug: req.params.slug }).populate({
        path: 'reviews',
        fields: 'review rating user'
    })
    res.status(200).render('main');

    });

exports.getLogin = (req, res) => {
    res.status(200).render('login');
};

exports.getRegister = (req, res) => {
    res.status(200).render('register');
};

exports.getHealthEd = (req, res) => {
    res.status(200).render('blog');
};

exports.getOverview = (req, res) => {
    res.status(200).render('overview');
};

exports.getLoginForm = (req, res)  => {
    res.status(200).render('login', {
        title: 'Log into your account'
    });

};
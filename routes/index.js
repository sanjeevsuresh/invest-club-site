var express = require('express');
var nodemailer = require('nodemailer');
var router = express.Router();
var transporter = nodemailer.createTransport({
	service: 'Gmail',
    auth: {
        user: 'sanjeevsuresh.online@gmail.com', // Your email id
        pass: 'REPLACE_ME' // Your password
    }
});
var text = 'A transaction failed';
var mailOptions = {
    from: 'BIG <sanjeevsuresh.online@gmail.com>', // sender address
    to: 'sanjeevsuresh95@gmail.com', // list of receivers
    subject: 'Failed Transaction', // Subject line
    text: text //, // plaintext body
    // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
};

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/join', function(req, res, next) {
  res.redirect('pay.html');
});
router.get('/apply', function(req, res, next) {
  res.redirect('getInvolved.html#InternProgram');
});
router.get('')
router.post('/charge', function (request, response, next) {
	// Set your secret key: remember to change this to your live secret key in production
	// See your keys here https://dashboard.stripe.com/account/apikeys
	var stripe = require("stripe")("sk_test_N5SNmDDzrzuMl1B3MjO7fPmb");

	// (Assuming you're using express - expressjs.com)
	// Get the credit card details submitted by the form
	var stripeToken = request.body.stripeToken;

	var charge = stripe.charges.create({
	  amount: 2500, // amount in cents, again
	  currency: "usd",
	  source: stripeToken,
	  description: "EXAMPLE: Lifetime Membership + SWAG"
	}, function(err, charge) {
	  if (err && err.type === 'StripeCardError') {
	    // The card has been declined
		transporter.sendMail(mailOptions, function(error, info){
		    if(error){
		        console.log(error);
		    }else{
		        console.log('Message sent: ' + info.response);
		    };
		});
	    response.redirect('decline.html');
	    console.log(err);
	  } else {
	  	response.redirect('https://docs.google.com/forms/d/1m9In9HW78jVlUPoqtgnJ_ymosLhlcg9FgBXx_bOTXOw/viewform');
	  }
	});
});

module.exports = router;

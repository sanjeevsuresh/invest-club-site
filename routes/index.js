var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
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
	    response.send('Your transaction did not go through for the following reason:\n' + err.message);
	    console.log(err);
	  } else {
	  	response.redirect('https://docs.google.com/forms/d/1m9In9HW78jVlUPoqtgnJ_ymosLhlcg9FgBXx_bOTXOw/viewform');
	  }
	});
});

module.exports = router;

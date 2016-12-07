var express = require('express')
var router 	= express.Router()
var members	= require('../models/members')

router.get('/', function(req, res){
	console.log('members.js invoked with members url');
	
	members.getEligibleMembersForNotification(function(err, rows, fields){
	if(!err){
		console.log('getEligibleMembersForNotification invoked');
		
		console.log('retrieved rows:',rows);
		res.send("inside /v1/members/:Card_Id ")
		//TODO invoke push notification service to send the notification
	}
	})
})
module.exports = router
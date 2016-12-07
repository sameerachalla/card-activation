var db = require('./db')
var connection = db.connection

function createConnection(){
	connection.connect();	
}

exports.getEligibleMembersForNotification = function(callback){
	
	
	var query = 'select C.Card_No, D.Device_Id, M.Party_Id , M.Mobile_No from Member_Info M 
				inner join Card_Info C ON M.Party_Id = C.Party_Id 
				inner join Device_Info D ON M.Party_Id = D.Party_Id
				inner join Batch_Info B ON M.Party_Id = B.Party_Id
				where Card_Activation_Status != 'Activated' and 
				Card_Dispatch_Status = 'Dispatched' and Notification_Status = 'Not Sent'';
	
	
	connection.query(query, function(err, rows, fields){
		if(err) throw err;
		
		console.log('Successfully retrieved the eligible members for notification to be sent', rows);
		callback(err, rows);
		
}	)
	
}


var db = require('./db')
var connection = db.connection

function createConnection(){
	connection.connect();	
}

exports.retrieveCardDetails = function(data, callback)
{
    var cardNumber = data.cardNumber;
    var query = 'select a.Party_Id, b.Notification_Status, c.Card_Activation_Status, c.Card_No, c.Card_Dispatch_Status from Member_Info a, Batch_Info b, Card_Info c where c.Card_Id = b.Card_Id && c.Party_Id = a.Party_id && c.Card_No=?';
    connection.query(query, cardNumber, function(err, rows, fields){
       if(err) throw err;
        
        console.log('The partyId is', rows[0].Party_Id);
        callback(err, rows);
    });
}

exports.updateCardActivationStatus = function(data,img, callback)
{
    var cardNumber = data;
    var query = "update card_info set Card_Activation_Status = 'Active', Card_Image = ? where Card_no = ?";
    connection.query(query, [img, cardNumber], function(err){
       if(err) throw err;
        console.log('Activation Completed Successfully');
        closeConnection();
        callback(err);
    });
}

function closeConnection()
{
    connection.end();
}
var express  =  require('express')
var app  =  express()
var controllers  =  require('./controllers')

app.use(controllers )

app.listen(3000, function(){
console.log('Express server started listening on port 3000.....') }
)

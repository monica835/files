var http=require('http')
http.createServer(function(req,res){
    res.write('hello monica');
    res.end();
   
}).listen(5000);

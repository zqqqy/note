var http = require("http");
var get = require("./httpGet.js");
var post = require("./httpPost");
http.createServer(function (req,res) {
        if (req.method=="GET"){
            get.doGet(req,res);
        }else if (req.method == "POST"){
            post.doPost(req,res);
        }else{
            res.end("404");
        }
}).listen(8888);



console.log("Server running at http://127.0.0.1:8888/");
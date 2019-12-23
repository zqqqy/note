function doGet(req,res) {
    /*var obj = ps.parse(usl.parse(req.url).query);
    console.log(obj);*/
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write("<html>");
    res.write("<head>");
    res.write("<title>");
    res.write("</title>");
    res.write("</head>");
    res.write("<body>");
    res.write("<form method='post'>");
    res.write("username:<input name='username'>");
    res.write("password:<input name='password' type='password'><input type='submit'>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    for (let i=0;i<10;i++){
        res.write("<h1>this in a page</h1>")};
    res.end("Hello word");
}
exports.doGet=doGet;
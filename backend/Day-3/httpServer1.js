const http = require('http');
const fs = require('fs/promises');
const server = http.createServer(async(req, res) => {
    const url = req.url;
    if(url == '/home' && req.method == 'GET'){
        const data = await fs.readFile('Home.html', 'utf-8');
        res.write(data);
    }else if(url == '/about' && req.method == 'POST'){
        const data = await fs.readFile('About.html', 'utf-8');
        res.write(data);
    }else{
        res.write('<h1>404 Page Not Found</h1>');
    }
    res.end();
})
server.listen(3001, (err) => {
    try{
        if(err) throw err;
        console.log('server running on port 3001');
    }
    catch(err){
        console.log('server error', err);
    }
})
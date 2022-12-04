const http = require('http');
const fs = require('fs');

const home = fs.readFileSync('index.html')
const about = fs.readFileSync('about.html')
const contact = fs.readFileSync('contact.html')
const service = fs.readFileSync('services.html')

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req,res)=>{
    console.log(req.url);
    url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type','text/html');
    if(url=="/"){
        res.end(home);
    }
    else if(url=='/aftab_about'){
        res.end(about);
    }
    else if(url=='/aftab_contact'){
        res.end(contact)
    }
    else if(url=='/aftab_services'){
        res.end(service);
    }
    else{
        res.statusCode=404;
        res.end("Please Enter right url")
    }
})

server.listen(port,hostname, ()=>{
    console.log(`Server running at http://${hostname}:${port}/`)
})
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    // console.log(req.url, req.method, req.headers);
    const url = req.url;
    const method = req.method;
    if(url === "/")
    {
        res.write("<html>");
        res.write("<head><title>Enter Message</title></head>");
        res.write("<body><form action='/message' method='POST'><input type='text' name='message'/><button type='submit'>Submit</button></form></body>");
        res.write("</html");
        return res.end();
    }
    if(url === "/message" && method === "POST")
    {
        const body = [];
        req.on("data", (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFile("message.txt", message, (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        });
    }
    // Process.exit ends our process for the server...
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My first node response</title></head>");
    res.write("<body><h1>This is the resopnse here!!!</h1></body>");
    res.write("</html");
    res.end();
});

server.listen(3000);
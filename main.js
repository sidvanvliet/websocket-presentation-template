const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

app.get("/", function (req, res) {});

io.on("connection", function (socket) {});

http.listen(3000, function () {});

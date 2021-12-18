const http = require("http");
const express = require("express");
const socketIo = require("socket.io");
const uuid = require("uuid");

const app = express();
const server = http.createServer(app);
const io = new socketIo.Server(server, {
  cors: {
    origin: "*",
  },
});

let onlineUsers = [];
let chatGroups = []

io.on("connection", (socket) => {
  console.log(socket.id);
  console.log("A client connected");

  socket.on("NEW_USER", (username) => {
    onlineUsers.push({
      socketId: socket.id,
      username: username,
    });
    io.emit("ONLINE_USERS_UPDATED", onlineUsers);
    io.emit("NEW_MESSAGE", {
      id: uuid.v4(), 
      type:"system",
      content: `${username} has joined`})
  });

  socket.on("NEW_MESSAGE", (content) => {
    const sender = onlineUsers.find((user) => user.socketId === socket.id);
    io.emit("NEW_MESSAGE", {id: uuid.v4(), sender: sender, content: content });
  });

  socket.on("CREATE_GROUP", (groupName) => {
    const currentUSer = onlineUsers.find((user) => user.socketId === socket.id);
    const id = uuid.v4()
    const group = {
      id:uuid.v4(),
      name: groupName,
      users: [currentUSer]
    }
    chatGroups.push(group);
    socket.join(id)
    socket.emit("GROUP_CREATED", group)
  })

  socket.on("disconnect", () => {
    const user = onlineUsers.find((user) => user.socketId === socket.id)
    io.emit("NEW_MESSAGE", {
      id: uuid.v4(), 
      type:"system",
      content: `${username} has left`
    })
    onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    io.emit("ONLINE_USERS_UPDATED", onlineUsers);
  });
});

app.get("/", (req, res) => {
  res.send("Welcome to our socket server");
});

server.listen(5000, () => {
  console.log("Server is running at 5000");
});

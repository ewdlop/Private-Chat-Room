const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Store active users
const users = new Map();

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Handle user joining
  socket.on('join', (username) => {
    users.set(socket.id, username);
    io.emit('userJoined', {
      username,
      userCount: users.size
    });
    console.log(`${username} joined the chat`);
  });

  // Handle new messages
  socket.on('message', (data) => {
    const username = users.get(socket.id) || 'Anonymous';
    io.emit('message', {
      username,
      text: data.text,
      timestamp: new Date().toISOString()
    });
  });

  // Handle user disconnect
  socket.on('disconnect', () => {
    const username = users.get(socket.id);
    if (username) {
      users.delete(socket.id);
      io.emit('userLeft', {
        username,
        userCount: users.size
      });
      console.log(`${username} left the chat`);
    }
  });
});

server.listen(PORT, () => {
  console.log(`Chat server running on port ${PORT}`);
  console.log(`Open http://localhost:${PORT} in your browser`);
});

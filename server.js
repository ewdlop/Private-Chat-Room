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

// Input validation and sanitization
function sanitizeUsername(username) {
  if (typeof username !== 'string') return null;
  const sanitized = username.trim().slice(0, 20);
  if (sanitized.length === 0) return null;
  return sanitized.replace(/[<>]/g, '');
}

function sanitizeMessage(text) {
  if (typeof text !== 'string') return null;
  const sanitized = text.trim().slice(0, 500);
  if (sanitized.length === 0) return null;
  return sanitized;
}

io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  // Handle user joining
  socket.on('join', (username) => {
    const sanitizedUsername = sanitizeUsername(username);
    if (!sanitizedUsername) {
      socket.emit('error', 'Invalid username');
      return;
    }
    users.set(socket.id, sanitizedUsername);
    io.emit('userJoined', {
      username: sanitizedUsername,
      userCount: users.size
    });
    console.log(`${sanitizedUsername} joined the chat`);
  });

  // Handle new messages
  socket.on('message', (data) => {
    const username = users.get(socket.id);
    if (!username) {
      socket.emit('error', 'Please join the chat first');
      return;
    }
    const sanitizedText = sanitizeMessage(data.text);
    if (!sanitizedText) {
      return;
    }
    io.emit('message', {
      username,
      text: sanitizedText,
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

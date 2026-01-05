let socket;
let username = '';

function joinChat() {
  const usernameInput = document.getElementById('usernameInput');
  username = usernameInput.value.trim();

  if (!username) {
    alert('Please enter a username');
    return;
  }

  // Connect to socket
  socket = io();

  // Send join event
  socket.emit('join', username);

  // Show chat screen
  document.getElementById('loginScreen').style.display = 'none';
  document.getElementById('chatScreen').style.display = 'flex';
  document.getElementById('currentUser').textContent = username;

  // Set up event listeners
  setupSocketListeners();

  // Focus message input
  document.getElementById('messageInput').focus();
}

function setupSocketListeners() {
  // Handle new messages
  socket.on('message', (data) => {
    addMessage(data);
  });

  // Handle user joined
  socket.on('userJoined', (data) => {
    addSystemMessage(`${data.username} joined the chat`);
    updateUserCount(data.userCount);
  });

  // Handle user left
  socket.on('userLeft', (data) => {
    addSystemMessage(`${data.username} left the chat`);
    updateUserCount(data.userCount);
  });
}

function sendMessage() {
  const messageInput = document.getElementById('messageInput');
  const text = messageInput.value.trim();

  if (!text) {
    return;
  }

  // Send message to server
  socket.emit('message', { text });

  // Clear input
  messageInput.value = '';
  messageInput.focus();
}

function addMessage(data) {
  const messagesDiv = document.getElementById('messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message';

  const timestamp = new Date(data.timestamp).toLocaleTimeString();

  messageDiv.innerHTML = `
    <div class="message-header">
      <span class="message-username">${escapeHtml(data.username)}</span>
      <span class="message-timestamp">${timestamp}</span>
    </div>
    <div class="message-text">${escapeHtml(data.text)}</div>
  `;

  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function addSystemMessage(text) {
  const messagesDiv = document.getElementById('messages');
  const messageDiv = document.createElement('div');
  messageDiv.className = 'message system-message';
  messageDiv.textContent = text;

  messagesDiv.appendChild(messageDiv);
  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}

function updateUserCount(count) {
  document.getElementById('userCount').textContent = `Users: ${count}`;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Handle Enter key in inputs
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('usernameInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      joinChat();
    }
  });

  document.getElementById('messageInput').addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      sendMessage();
    }
  });
});

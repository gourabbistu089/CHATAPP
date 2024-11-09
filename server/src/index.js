import 'dotenv/config';
import path from 'path';
import express from 'express';
import { app } from './app.js';
import connectDB from './db/index.js';
import http from 'http';
import { Server } from 'socket.io';  // Import Server from socket.io


const __dirname = path.resolve();
console.log(__dirname)
const rootDir = path.resolve(__dirname, '..');
console.log(rootDir); // 

app.use(express.static(path.join(rootDir, '/client/dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(rootDir, 'client/dist', 'index.html'));
})

// Create HTTP server from Express app
const server = http.createServer(app);

// Set up Socket.IO with the server
export const io = new Server(server, {
  cors: {
    origin: process.env.CORS_ORIGIN,
    credentials: true,
    methods:[' GET, POST'],
  },
});

export const getReceiverSocketId = (receiverId) => userSocketMap[receiverId];


const userSocketMap = {}; // {userId: socketId}

// Handle Socket.IO connections
io.on('connection', (socket) => {
  console.log('A user connected', socket.id);

const userId = socket.handshake.query.userId;
  if(userId != undefined) userSocketMap[userId] = socket.id;

  // io.emit() is used to send events to all connected clients
  io.emit('getOnlineUsers', Object.keys(userSocketMap));

  // Disconnect event
  socket.on('disconnect', () => {
    console.log('A user disconnected');
    delete userSocketMap[userId];
    io.emit('getOnlineUsers', Object.keys(userSocketMap));
  });

  // Example: Send a welcome message to the client after connection
  socket.emit('message', 'Welcome to the server!');
});

// Connect to the database and start the server
connectDB()
  .then(() => {
    server.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on port ${process.env.PORT || 8000}`);
    });
  })
  .catch((error) => {
    console.log('DB connection failed', error);
  });

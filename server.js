const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({
  dev,
  dir: './src',
  quiet: false,
});
const nextHandler = nextApp.getRequestHandler();

// socket.io server
io.on('connection', (socket) => {
  // Here we listen on a new namespace called "incoming data"
  socket.on('incoming data', (data) => {
    // Here we broadcast it out to all other sockets EXCLUDING the socket which sent us the data
    socket.broadcast.emit('outgoing data', { num: data });
  });

  // A special namespace "disconnect" for when a client disconnects
  socket.on('disconnect', () => console.log('Client disconnected'));
});

nextApp.prepare().then(() => {
  app.get('*', (req, res) => nextHandler(req, res));

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

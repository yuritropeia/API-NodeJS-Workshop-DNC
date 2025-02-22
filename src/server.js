//import { createServer } from 'http';
import fastify from 'fastify';
import userRoutes from './routes/user.routes.js';

/*const server = createServer((req, res) => {
  console.log(req.method);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World\n');
});

server.listen(3000);

console.log('Server running at http://localhost:3000/');*/

const app = fastify();

app.listen({ port: 3000 });

app.register(userRoutes, {prefix: '/users'})  

console.log('Server running at http://localhost:3000/');
import http from 'http'
import {app} from './app.js'
import dotenv from 'dotenv'
dotenv.config()

const server = http.createServer(app)
const Port = process.env.Port
server.listen(Port, () => {
    console.log(`Server running on port ${Port}`);
  });
import express from 'express';
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import http from 'http';

import users from "./routes/user.routes";

const app = express();

// Connect to database
const dbHost = 'mongodb://database/TDDD272017_applicants';
mongoose.connect(dbHost);

// Get POST stuff to work
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api', users);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('API running on localhost:' + port));
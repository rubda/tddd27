import express from 'express';
import bodyParser from "body-parser";
import http from 'http';

import api from "./routes/api";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', api);

const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log('API running on localhost: ${port}'));
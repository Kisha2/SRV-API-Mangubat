const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const serverless = require('serverless-http');
const router = require('./routes/author');

const app = express();
//your mongoDB Cloud URL
const dbCloudUrl =
'mongodb+srv://mangubatkizha18:1234@cluster0.y6d0zch.mongodb.net/.';
// mongoDB local URL
const dbLocalUrl = 'mongodb://localhost:27017//express-mongo-api';

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

mongoose
  .connect(dbCloudUrl || dbLocalUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Failed to connect to MongoDB:', error));
  
  const port = process.env.PORT || 3000;
  app.listen(port, () =>
    console.log(`Listening on port http://localhost:${port}`)
  );

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);
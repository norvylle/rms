#! /bin/bash

mysql -uroot&
npm start&
cd backend
nodemon server.js

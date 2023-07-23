import React from 'react';
import ReactDOM from 'react-dom';
import router from "./routes/routes"
import {RouterProvider} from "react-router-dom";
// import dotenv from "dotenv";
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
    console.log("error");
  });

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);
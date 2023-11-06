import express, { request, response } from "express";
import { PORT, mongoDBUrl } from "./confiq.js";
import mongoose from "mongoose";
import { Book } from "./models/books-model.js";
import booksRoute from "./routes/booksRoute.js"
import cors from "cors";

const app = express();

// Middleware for parsing request body
app.use(express.json());

// Middleware for handling CORS POLICY
  // Opt.1: Allow All Origins with Default of CORS(*)
    // app.use(cors())
  // Opt.2 (Preffer): Allow Custom Origins:
  app.use(cors({
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-type'],
  }))

app.get("/", (request, response) => {
  console.log(request);
  return response.status(200).send("Hello from backend");
});

app.use('/books', booksRoute)


// Connect with MONGOOSE

mongoose
  .connect(mongoDBUrl)
  .then(() => {
    console.log("App connected to Database");

    app.listen(PORT, () => {
      console.log(`App listen to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

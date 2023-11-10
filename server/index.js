import 'dotenv/config';
import express from 'express';
import mongoose from 'mongoose';

// import routes
import game_routes from './routes/game_routes.js';


// connect to MongoDB
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

db.on("error", () => {
    console.log("Error connecting to MongoDB using Mongoose!");
});


// set up express
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.use('/games', game_routes)

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
    });
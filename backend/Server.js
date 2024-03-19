// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
    // Send a JSON response with a message
    res.json({ message: 'Welcome to the app' });
});

// Start the server and listen on the specified port from environment variables
app.listen(process.env.PORT, () => {
    // Log a message to the console when the server starts
    console.log('Server is running on port:', process.env.PORT);
});

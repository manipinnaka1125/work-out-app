// Import required modules
const express = require('express');

// Create an instance of Express application
const app = express();

// Middleware to log request details
app.use((req, res, next) => {
    // Log the request method and path
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.path}`);
    
    // Pass control to the next middleware in the stack
    next();
});

// Define a route for the homepage
app.get('/', (req, res) => {
    // Send a response to the client
    res.send('Welcome to the blog homepage!');
});

// Define other routes...

// Start the server and listen on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

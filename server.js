import express from 'express';

// Define important variables
const MODE = process.env.MODE || 'production';
const PORT = process.env.PORT || 3000;
const app = express();

const name = process.env.NAME; // <-- NEW

// app.get('/', (req, res) => {
//     res.send(`Hello, ${name}!`); // <-- UPDATED
// });

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Example of the home route using the layout
app.get('/', (req, res) => {
    const title = 'Home Page';
    const content = '<h1>Welcome to the Home Page</h1>';
    res.render('index', { title, content });
});


// const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
const express = require("express");
const path = require("path");
const app = express();
const port = 8000;

// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static')) // For serving static files
app.use(express.urlencoded()) // This is middlewere,,, yeh help kata hai HTML(form) ka data express tak lane k liye

// PUG SPECIFIC STUFF
app.set('view engine', 'pug') // Set the template engine as pug
app.set('views', path.join(__dirname, 'views')) // Set the views directory
 
// ENDPOINTS
app.get('/', (_req, res)=>{
    const params = { }
    res.status(200).render('home.pug', params);
})

// Endpoint for contact page
app.get('/contact', (req, res)=>{
    const params = { }
    res.status(200).render('contact.pug', params);
})


// START THE SERVER
app.listen(port, ()=>{
    console.log(`The application started successfully on port ${port}`);
});

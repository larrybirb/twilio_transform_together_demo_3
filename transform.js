require('dotenv').config();
const sgMail = require('@sendgrid/mail');
const sgClient = require('@sendgrid/client');
const express = require('express')
const app = express();

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
sgClient.setApiKey(process.env.SENDGRID_API_KEY);

app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.set('view engine', 'ejs');


app.get("/", (req, res) => { // Creates sort of a listener for when there are "GET" requests to the "/" (root) path. Takes in req (request) and res (response)
    res.send("Hello World");
});

app.get('/signup', (req, res) => {
    res.render('signup', signUpPage);
});


const signUpPage = {
    title: 'Join Our Newsletter',
    subtitle: 'Subscribe to our newsletter to receive the latest news and products.',
};
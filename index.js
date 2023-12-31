const express = require('express');
const db = require('./config/connection');
const routes = require('./routes');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once('open', () => {
    app.use(routes);
    app.listen(PORT, () => {
        console.log(`API server running on port ${PORT}!`);
    });
});

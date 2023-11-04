const express = require('express');
const cors = require('cors');
const path = require('path');
const routerApp = require('./server/router');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());


routerApp(app);

app.use(express.static(path.join(__dirname, 'client', 'dashboard'))); // mostrar lo visual



app.listen(3500, () => {
    console.log('listening on port 3500');
})
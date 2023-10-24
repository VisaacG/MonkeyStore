const express = require('express');
const cors = require('cors');
const path = require('path');
const routerApp = require('./server/router/index.js');

const app = express();

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}));
app.use(cors());


routerApp(app);

app.use('/register',express.static(path.join(__dirname, 'client', 'register', 'registro2.0')));
app.use('/', express.static(path.join(__dirname, 'client', 'dashboard'))); // mostrar lo visual
app.use('/productos', express.static(path.join(__dirname, 'client', 'productos', "productos1")));


app.listen(3500, () => {
    console.log('listening on port 3500');
})

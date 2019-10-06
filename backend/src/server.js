const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();
    mongoose.connect('mongodb+srv://react-native:kxNlDA43uFxsXkpQ@omnistack-r3vul.mongodb.net/omnistack?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


// GET, POST, PUT, DELETE

//req.query = Acessar query params (para filtros)
//req.params = Acessar route params (para edição, deleção)
//req.body  = Acessar corpo da requisição (para criação, edição)

app.use(cors());
//app.use(cors({ origin: 'http://localhost:3333'}));
app.use(express.json());
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);

app.listen(3333, '192.168.15.240');

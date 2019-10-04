const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const routes = require('./routes');

const app = express();
//mongodb://oministack:Qw6bYO8G2uMzYRlX@omnistack-shard-00-00-r3vul.mongodb.net:27017,omnistack-shard-00-01-r3vul.mongodb.net:27017,omnistack-shard-00-02-r3vul.mongodb.net:27017/admin?ssl=true&replicaSet=omnistack-shard-0&authSource=admin&retryWrites=true&w=majority
//mongoose.connect('mongodb+srv://oministack:@omnistack-r3vul.mongodb.net/admin?retryWrites=true&w=majority', {
    mongoose.connect('mongodb+srv://oministack:Qw6bYO8G2uMzYRlX@omnistack-r3vul.mongodb.net/omnistack?retryWrites=true&w=majority', {
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

app.listen(3333);
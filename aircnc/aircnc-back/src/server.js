const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://user:password@aircncdb-d9bbg.mongodb.net/semana9?retryWrites=true&w=majority', {
   useNewUrlParser: true,
   useUnifiedTopology: true,
});

// req.query = Acessar query params (para filtros)
// req.params = acessar route params (para editar, delete)
// req.body = acessar corpo de requisicao (para criar e editar registros)

app.use(cors())
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','uploads')));
app.use(routes);

app.listen(3333);

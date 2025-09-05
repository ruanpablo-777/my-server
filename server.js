import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import './rotas/todolist/todo-list-backend/server.js';
const app = express()

// Ajustes para __dirname no ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// porta do render ou local
const port = process.env.PORT || 3000;

// Serve my-web-site na raiz
app.use('/', express.static(path.join(__dirname,'rotas/my-web-site')));

// Serve jogodavelha na rota /jogodavelha
app.use('/jogodavelha', express.static(path.join(__dirname,'rotas/jogodavelha')));

// Serve a pasta dist do React em /todolist
app.use('/todolist', express.static(path.join(__dirname, 'rotas/todolist/todo-list/dist')));

// Fallback para React Router (SPA)
app.get('/todolist', (req, res) => {
  res.sendFile(path.join(__dirname, 'rotas/todolist/todo-list/dist', 'index.html'));
  
});


// para qualquer rota não encontrada
app.use((req, res) => {
  res.status(404).send('Página não encontrada')
})

// start do servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

//h
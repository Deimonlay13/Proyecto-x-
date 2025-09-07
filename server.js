const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());

// Servir estáticos desde /public
app.use(express.static(path.join(__dirname, 'public')));

// Raíz explícita (opcional: express ya sirve public/index.html)
app.get('/', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ejemplo de endpoint para el form (ajusta según tu server real)
app.post('/send', (req, res) => {
  console.log('Formulario recibido:', req.body);
  // TODO: enviar correo aquí
  res.status(200).send({ message: 'Correo enviado ✅' });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor en http://localhost:${PORT}`));

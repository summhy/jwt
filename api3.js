const express = require('express');
const jwt = require('express-jwt');
const axios = require('axios');

const app = express();

// Configuración del middleware express-jwt
app.use(jwt({ secret: 'secreto' }));

// Ruta para consumir la API protegida por JWT
app.get('/api/protegida', (req, res) => {
  // Obtener el token JWT del encabezado de la solicitud
  const token = req.headers.authorization.split(' ')[1];

  // Realizar una solicitud a la API utilizando el token JWT
  axios.get('https://api.ejemplo.com/ruta', {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
  .then(response => {
    // Manejar la respuesta de la API
    res.status(200).json(response.data);
  })
  .catch(error => {
    // Manejar cualquier error de la API
    res.status(500).json({ error: 'Ocurrió un error al obtener los datos de la API.' });
  });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

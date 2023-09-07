const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();

// Middleware para validar el JWT
const validarJWT = (req, res, next) => {
  // Obtener el token del encabezado de la solicitud
  const token = req.header('Authorization');

  // Verificar si el token existe
  if (!token) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token no proporcionado.' });
  }

  try {
    // Verificar y decodificar el token
    const decoded = jwt.verify(token, 'secreto');

    // Agregar el objeto decodificado al objeto de solicitud
    req.usuario = decoded.usuario;

    // Continuar con la ejecución del siguiente middleware o ruta
    next();
  } catch (error) {
    return res.status(401).json({ mensaje: 'Acceso denegado. Token inválido.' });
  }
};

// Ruta protegida que requiere autenticación
app.get('/ruta-protegida', validarJWT, (req, res) => {
  res.json({ mensaje: 'Acceso permitido. Ruta protegida.' });
});

// Iniciar el servidor
app.listen(3000, () => {
  console.log('Servidor iniciado en el puerto 3000');
});

const axios = require('axios');
const jwt = require('jsonwebtoken');

// Generar JWT
const generateJWT = async () => {
  try {
    const payload = {
      username: 'usuario',
      role: 'admin'
    };

    const secret = 'mi_secreto';

    const token = jwt.sign(payload, secret);

    console.log('Token generado:', token);
  } catch (error) {
    console.error('Error al generar el JWT:', error);
  }
};

// Validar JWT
const validateJWT = async (token) => {
  try {
    const secret = 'mi_secreto';

    const decoded = jwt.verify(token, secret);

    console.log('JWT válido. Decodificado:', decoded);
  } catch (error) {
    console.error('Error al validar el JWT:', error);
  }
};

// Consumir la API POST
const consumeAPI = async () => {
  try {
    const response = await axios.post('https://api.example.com/login', {
      username: 'usuario',
      password: 'contraseña'
    });

    const token = response.data.token;

    console.log('Token recibido:', token);

    await validateJWT(token);
  } catch (error) {
    console.error('Error al consumir la API:', error);
  }
};

// Ejecutar el ejemplo
generateJWT();
consumeAPI();

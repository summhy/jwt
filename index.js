const jwt = require('jsonwebtoken');

// Datos del usuario
const usuario = {
  id: 123,
  nombre: 'Susana',
  rol: 'ejec'
};

// Generar el JWT
const token = jwt.sign(usuario, 'secreto', { expiresIn: '1h' });

console.log('JWT generado:', token);




// JWT a validar
//const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzLCJuYW1lIjoiSm9obiIsInJvbCI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.9jK1T4WYQGQiNjJZI8v8Ni8r0R6HJFtO0MTZs6TmYIc';

// Validar el JWT
jwt.verify(token, 'secreto', (err, decoded) => {
  if (err) {
    console.log('JWT inválido');
  } else {
    console.log('JWT válido');
    console.log('Datos decodificados:', decoded);
  }
});

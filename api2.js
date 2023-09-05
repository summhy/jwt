const fetch = require('node-fetch');

// Generación del JWT
const generarJWT = async () => {
  const response = await fetch('URL_DE_TU_API', {
    method: 'POST',
    body: JSON.stringify({}),
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();
  const jwt = data.jwt; // Obtén el JWT generado por la API

  return jwt;
};

// Validación del JWT
const validarJWT = async (jwt) => {
  const response = await fetch('URL_DE_TU_API', {
    method: 'POST',
    body: JSON.stringify({ jwt }),
    headers: { 'Content-Type': 'application/json' }
  });

  const data = await response.json();
  const esValido = data.esValido; // Obtén el resultado de la validación del JWT

  return esValido;
};

// Ejemplo de uso
(async () => {
  try {
    
    const jwtGenerado = await generarJWT();
    console.log('JWT generado:', jwtGenerado);

    const jwtValido = await validarJWT(jwtGenerado);
    console.log('El JWT es válido:', jwtValido);
  } catch (error) {
    console.error('Ocurrió un error:', error);
  }
})();

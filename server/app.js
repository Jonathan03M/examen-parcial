const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('¡Bienvenido a la aplicación de temperatura! Visita /temperatura?ciudad=FORMOSA para obtener la temperatura de FORMOSA,especificar que ciudad quieres cambiando FORMOSA por tu ciudad..');
});


app.get('/temperatura', async (req, res) => {
  const ciudad = req.query.ciudad;
  if (!ciudad) {
    return res.status(400).json({ error: 'Debes proporcionar una ciudad.' });
  }

  try {
    const apiKey = '98a574920f69651fe40076744fd98ed7'; // Reemplaza con tu clave de API
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`;
    const response = await axios.get(url);
    const temperatura = response.data.main.temp;

    res.json({ temperatura });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la temperatura.' });
  }
});

app.listen(port, () => {
  console.log(`Aplicación escuchando en el puerto ${port}`);
});

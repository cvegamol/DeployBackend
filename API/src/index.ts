import express from 'express';
import usuariosRouter from './routes/usuario';
import clasificacionesRouter from './routes/clasificaciones';
import escalasRouter from './routes/escalas';
import operacion_clasificaciones from './routes/operacion_clasificaciones';
import operacion_periodicidades from './routes/operacion_periodicidades';
import operacion_unidades from './routes/operacion_unidades';
import operacion_variable from './routes/operacion_variables';
import operacion from './routes/operacion';
import periodicidades from './routes/periodicidades';
import publicaciones from './routes/publicaciones';
import series from './routes/series';
import tablas from './routes/tablas';
import unidades from './routes/unidades';
import valores from './routes/valores';
import variable from './routes/variable';
import variables_series from './routes/variables_series';
const app = express();
const cors = require('cors');

// Configuración de CORS para desarrollo y producción usando process.env.URLFRONTEND
const allowedOrigins: string[] = [
  'http://localhost:3000', // Dominio para desarrollo local
  'https://deploybackend-production-8db4.up.railway.app', // Dominio para producción
];

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  })
);


// Middleware que transforma la req.body en JSON
app.use(express.json());

// Definir el puerto, usa el puerto proporcionado por el entorno en producción
const PORT = process.env.PORT || 3000;

// Ruta de prueba
app.get('/ping', (req, res) => {
  res.send('Hello World');
});

// Rutas
app.use(usuariosRouter);
app.use(clasificacionesRouter);
app.use(escalasRouter);
app.use(operacion_clasificaciones);
app.use(operacion_periodicidades);
app.use(operacion_unidades);
app.use(operacion_variable);
app.use(operacion);
app.use(periodicidades);
app.use(publicaciones);
app.use(series);
app.use(tablas);
app.use(unidades);
app.use(valores);
app.use(variable);
app.use(variables_series);

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log("POrueba",allowedOrigins)  ;
  console.log("Variables de entorno",process.env)
});

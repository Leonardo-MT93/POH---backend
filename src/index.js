import express from 'express';
import donationRoutes from './routes/donation.js';
import {PORT} from './config.js';
import morgan from 'morgan';
const app = express();

app.use(morgan('dev'));

app.use(donationRoutes)

app.listen(PORT);
console.log('Servidor corriendo en el puerto 5000');
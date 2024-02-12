import express from 'express';
import donationRoutes from './routes/donation.js';
import {PORT} from './config.js';
import morgan from 'morgan';
import cors from 'cors';
const app = express();
app.use(express.json());
app.use(morgan('dev'));
app.use(cors(
    {
        origin: 'https://porellosezeiza.vercel.app/'
    }
));
app.use(donationRoutes)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});
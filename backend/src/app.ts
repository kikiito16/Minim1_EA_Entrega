import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from'body-parser';
import VacunadoRoutes from './routes/vacunado.route'

const app = express();

app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use(cors());
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(bodyParser.json());

app.use('/vacunado', VacunadoRoutes);

export default app;
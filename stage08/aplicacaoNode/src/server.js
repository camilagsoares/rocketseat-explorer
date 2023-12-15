import express, { json } from 'express';
import routes from './routes/index.js';


const app = express();
const PORT = 3000;

app.use(json())
app.use(routes);


app.listen(PORT, () => console.log(`Server is running ${PORT}`));


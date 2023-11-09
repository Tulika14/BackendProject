import express from 'express';
import bodyParser from 'body-parser';

import thoughtRoutes from  './routes/thought.js';


const app = express();
//const cors = require('cors')
const PORT = 5000;

//app.use(cors());
app.use(bodyParser.json());

app.use('/thought', thoughtRoutes);

app.get('/' , (req,res) => res.send('Hello from Homepage. '));

app.listen(PORT , () => console.log(`Server running on port: http://localhost:${PORT}`));
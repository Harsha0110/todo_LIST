import express from 'express';
import Connection from './database/db.js';//putting .js compulsery for .js extenstion
import cors from 'cors';
import Routes from './routers/routes.js';

const app =express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use('/',Routes);

const PORT =8000;
Connection();

app.listen(PORT,()=> console.log(`server running.. on PORT ${PORT} ` )) 
  
 
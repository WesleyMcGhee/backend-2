const express = require('express');
const app = express();
const cors = require('cors')
const control = require('./controller');
const port = 4004;
app.use(express.json());
app.use(cors());

//endpoint

app.get('/api/houses', control.getHouses);
app.post('/api/houses', control.createHouse);
app.put('/api/houses/:id', control.updateHouse);
app.delete('/api/houses/:id', control.deleteHouse);



app.listen(port, () => console.log(`Server is up an running on ${port}...`));
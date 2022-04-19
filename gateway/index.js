const express = require('express');
const cors = require('cors');
const proxy = require('express-http-proxy');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/security', proxy('http://localhost:8001'))
app.use('/forecast', proxy('http://localhost:8002')) // products


app.listen(8000, () => {
    console.log('Gateway is Listening to Port 8000')
})
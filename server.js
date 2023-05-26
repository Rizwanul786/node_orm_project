require('dotenv').config();
const app = require('./urls');

const port = process.env.API_PORT || 3000;

app.get('/', (_request, response) => {
  response.send({"message":"Welcome"});
});

app.listen(port, () => console.log('server running:', port));
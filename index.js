require('dotenv').config();

const server = require('./api/server');

server.listen(process.env.PORT, () => {
    console.log(`Magic happening on port ${process.env.PORT}!`);
});
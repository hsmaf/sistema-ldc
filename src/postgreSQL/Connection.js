function Conectar(){
  
  const { Client } = require('pg');
  const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'postgres',
    password: 'lollol',
    port: 5432,
  });

  client.connect();
  return client;
}

module.exports = Conectar;
  
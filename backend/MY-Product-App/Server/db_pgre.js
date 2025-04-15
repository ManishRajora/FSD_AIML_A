const {Client} = require('pg');
const client = new Client({
    host: 'localhost',
    port: 5432,
    database: 'My-App-DB',
    user: 'postgres',
    password: '@vinesh22'
});

client.connect()
    .then(() => {
        console.log('POSTGRESQL Connected');
    })
    .catch(err => {
        console.log('DB Error', err.message);
    });

client.query("select * from users", (err, res) => {
    if(err){
        console.log('Query Error', err.message);
    }else{
        console.log('Data:', res.rows);
    }
});
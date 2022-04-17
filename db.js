const Pool = require('pg').Pool
const pool = new Pool({

    user: "xxxx",
    host: "xxxx",
    database: "xxxxx",
    password: "xxxxx",
    port: 5432,

    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;

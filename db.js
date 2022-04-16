const Pool = require('pg').Pool
const pool = new Pool({

    user: "dumykkszkhckvq",
    host: "ec2-34-197-84-74.compute-1.amazonaws.com",
    database: "d609r11akge715",
    password: "2f37a4548b6d3d0ffd5042a8be3fd8ee09dcdcff870c0169908db698b1bce2e3",
    port: 5432,

    ssl: {
        rejectUnauthorized: false
    }
})

module.exports = pool;
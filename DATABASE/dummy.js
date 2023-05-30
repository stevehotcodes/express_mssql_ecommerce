const fs = require('fs');
const sql = require('mssql');
const path = require('path');

const dotenv = require('dotenv')

dotenv.config({path:path.resolve(__dirname, '../.env')});

const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_SERVER,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
      },
    options: {
        encrypt: true, // for azure
        trustServerCertificate: true // change to true for local dev / self-signed certs
    }
}

async function addDummyData() {
    try {
        const pool = await sql.connect(config);
        const dummyFiles = [
            'dummy_data/dummyUsers.sql',
            'dummy_data/dummyCategories.sql',
            'dummy_data/dummyProducts.sql',
            'dummy_data/dummyImages.sql'
        ]
        for (const file of dummyFiles) {
            const sql = fs.readFileSync(path.join(__dirname, file), 'utf8')
            await pool.request().query(sql);
            console.log(`   ✔️ ${path.join(__dirname, file)} executed successfully`)
        }
        console.log('')
        console.log('✔️ All dummy SQL files executed successfully ✔️')

        pool.close()
    } catch (err) {
        console.error(err)
    }
}


console.log('---------------------')
console.log('Adding dummy data to the DATABASE...');
addDummyData()
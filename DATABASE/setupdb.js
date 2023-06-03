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

async function executeTableSqlFiles() {
    try {
        const pool = await sql.connect(config);
        const tableFiles = [
            'tables/dropTables.sql',
            'tables/createUserTable.sql',
            'tables/createCategoriesTable.sql',
            'tables/createProductsTable.sql',
            'tables/createImagesTable.sql',
            'tables/createOrdersTable.sql',
            'tables/createCartTable.sql',
            'tables/createSalesTable.sql']
        for (const file of tableFiles) {
            const sql = fs.readFileSync(path.join(__dirname, file), 'utf8')
            await pool.request().query(sql);
            console.log(`   ✔️ ${path.join(__dirname, file)} executed successfully`)
        }
        console.log('')
        console.log('✔️ All table SQL files executed successfully ✔️')

        pool.close()
    } catch (err) {
        console.error(err)
    }
}


async function executeSpSqlFiles(spFolderPath) {
    try {
        const pool = await sql.connect(config)
        const spFiles = fs.readdirSync(spFolderPath)
        for (const file of spFiles) {
            const filePath = path.join(spFolderPath, file)
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                await executeSpSqlFiles(filePath);
            } else if (path.extname(file) === '.sql') {
                const sql = fs.readFileSync(filePath, 'utf8')
                await pool.request().query(sql);
                console.log(`   ✔️ ${filePath} executed successfully`)
            }
        }
        console.log('')
        console.log(`✔️ All SQL files in ${spFolderPath} executed successfully ✔️`)
        console.log('');
        pool.close()
    } catch (err) {
        console.error(err)
    }
}

async function executeTriggersSqlFiles(triggersFolderPath) {
    try {
        const pool = await sql.connect(config)
        const spFiles = fs.readdirSync(triggersFolderPath)
        for (const file of spFiles) {
            const filePath = path.join(triggersFolderPath, file)
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                await executeSpSqlFiles(filePath);
            } else if (path.extname(file) === '.sql') {
                const sql = fs.readFileSync(filePath, 'utf8')
                await pool.request().query(sql);
                console.log(`   ✔️ ${filePath} executed successfully`)
            }
        }
        console.log('')
        console.log(`✔️ All SQL files in ${triggersFolderPath} executed successfully ✔️`)
        console.log('');
        pool.close()
    } catch (err) {
        console.error(err)
    }
}


async function execute(){
    console.log('---------------------');
    console.log('executing create tables...');
    await executeTableSqlFiles()
    console.log('');
    console.log('---------------------');
    console.log('executing stored procedures...');
    console.log('');
    await executeSpSqlFiles(path.join(__dirname, 'stored_procedures'))
    console.log('');
    console.log('---------------------');
    console.log('executing triggers...');
    console.log('');
    await executeTriggersSqlFiles(path.join(__dirname, 'triggers'))
}

execute()
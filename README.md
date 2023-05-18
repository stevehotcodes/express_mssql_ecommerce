# express_mssql_ecommerce
node project

## START HERE
### PREREQUISITES

- NODEJS
- MSSQL

### SETUP
1. Setup Project and Dependencies

- Clone this repo

- `npm install`

2. Setup DB
- Create a **.env** file and add these environment variables. Use a development DB to avoid your valuable data being overwritten.
```
DB_USER
DB_PWD
DB_NAME
DB_SERVER
SECRET_KEY
NODEMAILER_EMAIL
NODEMAILER_PASSWORD
```

- Run `node DATABASE/setupdb` to setup the database

- Run `npm run dev` to start up the development server

- Go to http://localhost:4000/docs for REST API docs
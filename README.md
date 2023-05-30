# express_mssql_ecommerce

node project

## START HERE

### PREREQUISITES

- NODEJS
- MSSQL

### SETUP

#### Setup Project and Dependencies

- Clone this repo

- `npm install`

#### Setup DB

- Create a **.env** file and add these environment variables. Use a development DB to avoid your valuable data being overwritten. APPHOST and PORT are optional for a local server. Hosted, these variables will help send the correct links in emails

```env
DB_USER
DB_PWD
DB_NAME
DB_SERVER
SECRET_KEY
NODEMAILER_EMAIL
NODEMAILER_PASSWORD
APPHOST
PORT
```

- Run `node DATABASE/setupdb` to setup the database

- Run `npm run dev` to start up the development server

- Go to /docs for REST API docs

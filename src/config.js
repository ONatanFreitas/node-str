require('dotenv').config();

global.SALT_KEY = process.env.RANDOM_SALT_KEY;
global.EMAIL_TMPL = 'Olá, <strong>{0}</strong>! Seja bem-vinde à Node Store!';

module.exports = {
    connectionString: process.env.DB_CONNECTION_STRING,
    sendgridKey: process.env.SENDGRID_KEY,
    userImagesBlobConnectionString: process.env.AZURE_CONNECTION_STRING
}
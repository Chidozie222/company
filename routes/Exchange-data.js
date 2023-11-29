const { Router } = require("express");
const {google} = require('googleapis')
const File = require('./valuemize-b37621eab305.json')
require('dotenv').config()

const Exchange = Router()


const client = new google.auth.GoogleAuth({
    credentials: {
        type: File.type,
        project_id: File.project_id,
        private_key_id: File.private_key_id,
        private_key: File.private_key.replace(/(\\r)|(\\n)/g, '\n'),
        client_email: File.client_email,
        client_id: File.client_id,
        auth_uri: File.auth_uri,
        token_uri: File.token_uri,
        auth_provider_x509_cert_url: File.auth_provider_x509_cert_url,
        client_x509_cert_url: File.client_x509_cert_url,
        universe_domain: File.universe_domain
    },
    scopes: ['https://www.googleapis.com/auth/spreadsheets']
})

Exchange.get("/exchange_data", async(req,res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1Ij0FTlLtWcAyA5A91AMYmgF6qOSVypbnn3SxG0PHnuk",
        range: "Exchange Data"
    })

    res.send(response.data.values)
})

module.exports = Exchange
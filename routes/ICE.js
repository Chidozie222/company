const { Router } = require("express");
const { auth } = require("google-auth-library");
const {google} = require('googleapis')
const File = require('./file.json')
require('dotenv').config()

const ice = Router()

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


ice.get('/', (req, res) => {
    res.send({
        message: 'we are clear for take off',
        serect: process.env.ICE_client_email,
        password: process.env.ICE_private_key.replace(/(\\r)|(\\n)/g, '\n')
    })
})

ice.get('/ice_MW', async(req, res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1QyPfLHIwPx4GbYLvknDKiRETDZzlpGVdgJ0y7v6-Hjk",
        range: "MW"
    })

    res.send(response.data.values)
})


ice.get('/ice_EG', async(req, res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1QyPfLHIwPx4GbYLvknDKiRETDZzlpGVdgJ0y7v6-Hjk",
        range: "EG"
    })

    res.send(response.data.values)
})


ice.get('/ice_Zw', async(req, res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1QyPfLHIwPx4GbYLvknDKiRETDZzlpGVdgJ0y7v6-Hjk",
        range: "Zw"
    })

    res.send(response.data.values)
})

ice.get('/ice_UG', async(req, res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1QyPfLHIwPx4GbYLvknDKiRETDZzlpGVdgJ0y7v6-Hjk",
        range: "UG"
    })

    res.send(response.data.values)
})


ice.get('/ice_TZ', async(req, res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1QyPfLHIwPx4GbYLvknDKiRETDZzlpGVdgJ0y7v6-Hjk",
        range: "TZ"
    })

    res.send(response.data.values)
})

ice.get('/ice_NG', async(req, res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1QyPfLHIwPx4GbYLvknDKiRETDZzlpGVdgJ0y7v6-Hjk",
        range: "NG"
    })

    res.send(response.data.values)
})


ice.get('/ice_IC', async(req, res) => {
    const Auth = await client.getClient()
    const sheets = google.sheets({ version: "v4", auth: Auth})

    const response = await sheets.spreadsheets.values.get({
        spreadsheetId: "1QyPfLHIwPx4GbYLvknDKiRETDZzlpGVdgJ0y7v6-Hjk",
        range: "IC"
    })

    res.send(response.data.values)
})
module.exports = ice
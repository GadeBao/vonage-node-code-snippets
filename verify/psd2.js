require('dotenv').config({
  path: __dirname + '/../.env'
});

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const RECIPIENT_NUMBER = process.env.RECIPIENT_NUMBER;
const PAYEE = process.env.PAYEE;
const AMOUNT = process.env.AMOUNT;

const { Vonage } = require('@vonage/server-sdk');
const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET
});

vonage.verify.start({
  number: RECIPIENT_NUMBER,
  payee: PAYEE,
  amount: AMOUNT
})
  .then(resp => console.log(resp.request_id))
  .catch(err => console.error(err));
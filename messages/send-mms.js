require('dotenv').config({path: __dirname + '/../.env'})

const VONAGE_API_KEY = process.env.VONAGE_API_KEY
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID
const VONAGE_APPLICATION_PRIVATE_KEY_PATH = __dirname +"/../"+ process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH

const TO_NUMBER = process.env.TO_NUMBER
const FROM_NUMBER = process.env.FROM_NUMBER
const IMAGE_URL = process.env.IMAGE_URL

const { Vonage } = require('@vonage/server-sdk')
const { Image } = require('@vonage/messages/dist/classes/MMS/Image')

const vonage = new Vonage({
  apiKey: VONAGE_API_KEY,
  apiSecret: VONAGE_API_SECRET,
  applicationId: VONAGE_APPLICATION_ID,
  privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH
})

vonage.messages.send(
  new Image({ "url": IMAGE_URL }, TO_NUMBER, FROM_NUMBER)
)
  .then(resp => console.log(resp.message_uuid))
  .catch(err => console.error(err));

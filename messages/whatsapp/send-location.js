require('dotenv').config({ path: __dirname + '/../../.env' });

const VONAGE_API_KEY = process.env.VONAGE_API_KEY;
const VONAGE_API_SECRET = process.env.VONAGE_API_SECRET;
const VONAGE_APPLICATION_ID = process.env.VONAGE_APPLICATION_ID;
const VONAGE_APPLICATION_PRIVATE_KEY_PATH =
	__dirname + '/../../' + process.env.VONAGE_APPLICATION_PRIVATE_KEY_PATH;

const TO_NUMBER = process.env.TO_NUMBER;
const WHATSAPP_NUMBER = process.env.WHATSAPP_NUMBER;
const BASE_URL = process.env.BASE_URL;

const { Vonage } = require('@vonage/server-sdk');
const { CustomMessage } = require('@vonage/messages/dist/classes/WhatsApp/CustomMessage');

const vonage = new Vonage(
	{
		apiKey: VONAGE_API_KEY,
		apiSecret: VONAGE_API_SECRET,
		applicationId: VONAGE_APPLICATION_ID,
		privateKey: VONAGE_APPLICATION_PRIVATE_KEY_PATH,
	},
	{
		apiHost: BASE_URL,
	}
);

vonage.messages.send(
	new CustomMessage(
		{
			type: 'location',
			location: {
				longitude: -122.425332,
				latitude: 37.758056,
				name: 'Facebook HQ',
				address: '1 Hacker Way, Menlo Park, CA 94025',
			},
		},
		TO_NUMBER,
		WHATSAPP_NUMBER,
	)
)
	.then(resp => console.log(resp.message_uuid))
	.catch(err => console.error(err));
import { success, failure } from './libs/response';
import AWS from 'aws-sdk';

AWS.config.update({ region: 'us-east-1' });

export async function main(event) {
  try {
    console.log('Starting contact email send...');

    const data = JSON.parse(event.body);

    if (!data.name || !data.email || !data.message) {
      console.log('All empty values, bailing out.');
      return failure({ message: `Name, email and message are all required.`, status: false });
    }

    await sendEmail(data);

    return success({ message: `Email sent`, status: true });
  }
  catch (e) {
    console.log(e);
    return failure({ message: `Email failed to send`, status: false });
  }
}

async function sendEmail(event) {
  const RECEIVER = process.env.EMAIL_SES_RECEIVER;
  const SENDER = process.env.EMAIL_SES_SENDER;
  const params = {
    Destination: {
      ToAddresses: [
        RECEIVER
      ]
    },
    Message: {
      Body: {
        Text: {
          Data: 'name: ' + event.name + '\nemail: ' + event.email + '\nmessage: ' + event.message,
          Charset: 'UTF-8'
        }
      },
      Subject: {
        Data: 'Website Referral Form: ' + event.name,
        Charset: 'UTF-8'
      }
    },
    Source: SENDER
  };

  console.log(`Sending email: ${JSON.stringify(params)}`);
  return new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();
}

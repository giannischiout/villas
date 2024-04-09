
import nodemailer from 'nodemailer';


const transporter = nodemailer.createTransport({
  host: 'smtp.strato.de',
  port: 465,
  secure: true,
  auth: {
    user: process.env.NODEMAILER_USER,
    pass: process.env.NODEMAILER_PASS
  }
});




export async function POST(req, res) {
  const { data } = await req.json();
  console.log(data)

  let villa;
  switch (data?.villa) {
    case 1:
      villa = "CASTRO"
      break;
    case 2:
      villa = "JIRA"
      break;
    case 3:
      villa = "MILOS"
      break;

  }

 // Email content for the booking confirmation to the client
 const clientMailOptions = {
  from: process.env.NODEMAILER_SENDER,
  to: data.email,
  subject: 'Booking Request Confirmation',
  html: `
    <p>Dear ${data.Name},</p>
    <p>We received your booking request with the following details:</p>
    <p>Name: ${data.Name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone Number: ${data.contactPhone}</p>
    <p>Villa: ${villa}</p>
    <p>Period: ${data.arivalDate} - ${data.departureDate}</p>
    <p>Special Request: ${data.specialRequest}</p>
    <p>We will contact you shortly.</p>
  `
};

// Email content for the booking notification to the admin
const adminMailOptions = {
  from: process.env.NODEMAILER_SENDER,
  to: process.env.NODEMAILER_SENDER,
  subject: 'New Booking Request',
  html: `
    <p>New booking request received with the following details:</p>
    <p>Name: ${data.Name}</p>
    <p>Email: ${data.email}</p>
    <p>Phone Number: ${data.contactPhone}</p>
    <p>Villa: ${villa}</p>
    <p>Period: ${data.arivalDate} - ${data.departureDate}</p>
    <p>Special Request: ${data.specialRequest}</p>
  `
};

  // Send emails

  const sendEmailPromise = new Promise((resolve, reject) => {
    transporter.sendMail(clientMailOptions, (error, clientInfo) => {
      if (error) {
        reject(error);
        console.error('Error occurred while sending booking confirmation email to the client:', error);
      } else {
        console.log('Booking confirmation email sent to the client:', clientInfo);
        resolve(clientInfo);
      }
    });
  });
  const sendAdminPromise = new Promise((resolve, reject) => {
    transporter.sendMail(adminMailOptions, (error, adminInfo) => {
      if (error) {
        reject(error);
      } else {
        resolve(adminInfo);
      }
    });
   
  });
 
  const [clientInfo, adminInfo] = await Promise.all([sendEmailPromise, sendAdminPromise]);

  
  async function bookingRqs(data) {
    try {
      const resp = await fetch('https://strapi.3v7i.com/api/booking-rqs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          data: data
        })
      })
      let response = await resp.json()
      console.log(response)
      return response;
    } catch {
      return null;
    }

  }

  const booking = await bookingRqs(data);
  console.log('booking')
  console.log(booking)

  return Response.json({
    status: 200,
    success: true,
    clientInfo: clientInfo,
    adminInfo: adminInfo,
    // booking: booking
   })
}
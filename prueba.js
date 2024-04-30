const axios = require('axios');
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ser="http://example.com/userService">
   <soapenv:Header/>
   <soapenv:Body>
      <ser:postUserRequest>
         <user>
            <userIdNumber>123</userIdNumber>
            <userName>John Doe</userName>
            <userAge>30</userAge>
            <userEmail>johndoe@example.com</userEmail>
            <userPhone>1234567890</userPhone>
            <userCity>City</userCity>
            <userCountry>Country</userCountry>
            <userPostalCode>12345</userPostalCode>
         </user>
      </ser:postUserRequest>
   </soapenv:Body>
</soapenv:Envelope>`;

axios.post('http://localhost:3003/user', xml, {
  headers: {
    'Content-Type': 'text/xml',
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.error(error);
  });
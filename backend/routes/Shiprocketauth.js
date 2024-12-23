const axios=require('axios');

// Your login credentials
const email = 'ramg18578@gmail.com';
const password = process.env.SHIPROCKET_PASS;

const authenticate = async () => {
  try {
    const response = await axios.post('https://apiv2.shiprocket.in/v1/external/auth', {
      email: email,
      password: password
    });

    const token = response.data.token; 
    console.log('Received Token:', token);
  } catch (error) {
    console.error('Error authenticating:', error);
  }
};


  

module.exports = authenticate;

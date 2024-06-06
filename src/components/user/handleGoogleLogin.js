import React from 'react';

const google_client_id = process.env.REACT_APP_GOOGLE_CLIENT_ID;
const google_redirect_url = 	'http://localhost:3000/oauth/google';
const googleURL = `https://accounts.google.com/o/oauth2/v2/auth?
client_id=${google_client_id}
&redirect_uri=${google_redirect_url}
&response_type=code
&scope=email profile`

const handleGoogleLogin = () => {
   window.location.href = googleURL;
}

export default handleGoogleLogin

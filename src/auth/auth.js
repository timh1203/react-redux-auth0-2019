import auth0 from 'auth0-js'

class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'timh1203.auth0.com',
    clientID: 'QGce2RCyo8epuX1i7sSips9EipGt79lD',
    redirectUri: 'http://localhost:3000/callback',
    responseType: 'token id_token',
    scope: 'openid profile email'
  })

  login = () => {
    this.auth0.authorize()
  }
}

export default Auth

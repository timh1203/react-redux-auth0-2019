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

  handleAuth = () => {
    this.auth0.parseHash((err, authResult) => {
      if (authResult) {
        let expiresAt = JSON.stringify(authResult.expiresIn * 1000 + new Date().getTime())
        localStorage.setItem('expiresAt', expiresAt)
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)
      }
      else {
        console.error(err)
      }
    })
  }

  logout = () => {
    localStorage.removeItem('expiresAt')
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
  }
}

export default Auth

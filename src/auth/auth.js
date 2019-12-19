import auth0 from 'auth0-js'
import history from '../routes/history'

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
        localStorage.setItem('expires_at', expiresAt)
        localStorage.setItem('access_token', authResult.accessToken)
        localStorage.setItem('id_token', authResult.idToken)
        setTimeout(() => { history.replace('/authcheck') }, 200)
      }
      else {
        console.error(err)
      }
    })
  }

  isAuthenticated = () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    return new Date().getTime() < expiresAt
  }

  logout = () => {
    localStorage.removeItem('expires_at')
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')
  }
}

export default Auth

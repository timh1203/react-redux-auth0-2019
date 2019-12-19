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

  userProfile = {}

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

        this.getProfile()

        setTimeout(() => { history.replace('/authcheck') }, 2000)
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

  getAccessToken = () => {
    if (localStorage.getItem('access_token')) {
      const accessToken = localStorage.getItem('access_token')
      return accessToken
    }
    else {
      return null
    }
  }

  getProfile = () => {
    let accessToken = this.getAccessToken()

    if (accessToken) {
      this.auth0.client.userInfo(accessToken, (err, profile) => { // built in auth0 method to get user profile
        if (profile) {
          this.userProfile = { profile } // store user profile in an object defined at top
        }
        else {
          console.error(err)
        }
      })
    }
    else {
      return null
    }
  }

  logout = () => {
    localStorage.removeItem('expires_at')
    localStorage.removeItem('access_token')
    localStorage.removeItem('id_token')

    setTimeout(() => { history.replace('/authcheck') }, 2000)
  }
}

export default Auth

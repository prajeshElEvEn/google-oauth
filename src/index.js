
function handleSignIn() {
    let oauthEndpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method', 'GET')
    form.setAttribute('action', oauthEndpoint)

    let params = {
        "clientId": "157489452148-1mt69i2jsmhc5sertanfu25jttc6mvhc.apps.googleusercontent.com",
        "redirectUri": "http://127.0.0.1:5500/pages/profile.html",
        "responseType": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile",
        "includeGrantedScopes": "true",
        "state": "pass-through-value"
    }
}


function handleSignIn() {
    let oauthEndpoint = "https://accounts.google.com/o/oauth2/v2/auth"

    let form = document.createElement('form')
    form.setAttribute('method', 'GET')
    form.setAttribute('action', oauthEndpoint)

    let params = {
        "client_id": "157489452148-1mt69i2jsmhc5sertanfu25jttc6mvhc.apps.googleusercontent.com",
        "redirect_uri": "http://127.0.0.1:5500/pages/profile.html",
        "response_type": "token",
        "scope": "https://www.googleapis.com/auth/userinfo.profile",
        "include_granted_scopes": "true",
        "state": "pass-through-value"
    }

    for (var param in params) {
        let input = document.createElement('input')
        input.setAttribute('type', 'hidden')
        input.setAttribute('name', param)
        input.setAttribute('value', params[param])
        form.appendChild(input)
    }

    document.body.appendChild(form)

    form.submit()
}

class Auth {
  constructor () {
  }

  initialize () {
    window.fbAsyncInit = () => {
      window.FB.init({
        appId      : '1081772241909189',
        cookie     : true,
        xfbml      : true,
        version    : 'v2.7',
        frictionlessRequests: true
      })

      window.FB.getLoginStatus((response) => {
        this.statusChangeCallback(response);
      })
    }

    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  statusChangeCallback (response) {
    console.log(response)
  }

  loggedIn() {
    window.FB.getLoginStatus((response) => {
      this.handleLoginStatusResponse(response)
    })
  }

  handleLoginStatusResponse (response) {
  }
}

export default Auth

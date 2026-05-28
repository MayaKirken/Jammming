let accessToken;

const Spotify = {
    getAccessToken() {
        if(accessToken) {
            return accessToken;
        }
        const accessTokenMatch = window.location.href.match(/access_token=[^&]*/);
        const expiresInMatch = window.location.href.match(/expires_token=[^&]*/);
    }
}

export default Spotify;
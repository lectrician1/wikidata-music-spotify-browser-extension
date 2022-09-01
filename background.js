const redirectURL = chrome.identity.getRedirectURL();

console.log(redirectURL);

var client_id = '6f2b98fc3dc74f609e5686584fec44a6';

var scope = '';

var url = 'https://accounts.spotify.com/authorize';
url += '?response_type=token';
url += '&client_id=' + encodeURIComponent(client_id);
url += '&scope=' + encodeURIComponent(scope);
url += '&redirect_uri=' + encodeURIComponent(redirectURL);

chrome.identity.launchWebAuthFlow({
    interactive: true,
    url: url
}, (response) => {
    console.log(response)
    let m = response.match(/[#?](.*)/);
    if (!m || m.length < 1)
        return null;
    let params = new URLSearchParams(m[1].split("#")[0]);


    let access_token = params.get("access_token");
    console.log(access_token);
    chrome.storage.local.set({ 'access_token': access_token }, function () {
        console.log('Value is set to ' + access_token);
    });
});
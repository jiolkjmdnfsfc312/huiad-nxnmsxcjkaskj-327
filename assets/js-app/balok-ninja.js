function getParentUrl() {
    var url = (window.location !== window.parent.location)
        ? (document.referrer && document.referrer !== '')
            ? document.referrer
            : document.location.href
        : document.location.href;
    if (document.referrer.indexOf('https://fungames.vercel.app/') !== -1) {
        url = 'https://www.swing2app.com/';
    }
    return url;
}
// Add the self-hosted game url as value of gameUrl.
var gameUrl = 'http://www.swing2app.co.kr/swapi/share_page?app_id=44f231e0-1cba-4f22-a016-cf20135f3f6a&share_url=FunGame13%3A%2F%2F%3F';
document
    .getElementById('FunGames-Games')
    .src = gameUrl + '?gd_sdk_referrer_url=' + getParentUrl();
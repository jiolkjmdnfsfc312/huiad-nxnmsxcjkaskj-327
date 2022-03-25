function getParentUrl() {
    var url = (window.location !== window.parent.location)
        ? (document.referrer && document.referrer !== '')
            ? document.referrer
            : document.location.href
        : document.location.href;
    if (document.referrer.indexOf('https://www.fungames.my.id/') !== -1) {
        url = 'https://gamedistribution.com/';
    }
    return url;
}
// Add the self-hosted game url as value of gameUrl.
var gameUrl = 'https://html5.gamedistribution.com/571357d055374f078e471057d4fcdbea/';
document
    .getElementById('FunGames')
    .src = gameUrl + '?gd_sdk_referrer_url=' + getParentUrl();
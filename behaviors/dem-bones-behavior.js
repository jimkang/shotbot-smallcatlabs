var probable = require('probable');
var callNextTick = require('call-next-tick');

module.exports = {
  postingTargets: ['archive'],
  generateImageURL(done) {
    var seed = 'bot-' + new Date().toISOString();
    var url = 'http://jimkang.com/dem-bones/#hideControls=yes&seed=' + seed;
    if (probable.roll(4) === 0) {
      const multiplier = probable.rollDie(20) + 2;
      url += `&numberOfSetsToUse=${multiplier}`;
      url += `&minimumNumberOfBones=${multiplier * probable.rollDie(8)}`;
    }
    var altText = 'Dem bones dem bones dem – dry bones!';
    var caption = `<a href="${url}">Source</a> | ` + altText;
    callNextTick(done, null, { url, altText, caption });
  },
  webimageOpts: {
    screenshotOpts: {
      clip: {
        x: 0,
        y: 0,
        width: 640,
        height: 640
      }
    },
    viewportOpts: {
      width: 640,
      height: 640,
      deviceScaleFactor: 1
    },
    burstCount: 48,
    timeBetweenBursts: 1000 / 24,
    makeBurstsIntoAnimatedGif: true
  },
  archive: {
    name: 'Dem Bones',
    title: 'Dem Bones',
    idPrefix: 'bones-',
    homeLink: 'https://smidgeo.com/bots/dem-bones',
    rootPath: '/usr/share/nginx/html/smidgeo.com/bots/dem-bones',
    footerHTML: `<footer>
    <p>Dem bones dem bones dem &mdash; dry bones!</p>
    <p><a href="http://jimkang.com/dem-bones/">Make your own bones!</a></p>
    <p><a href="https://smidgeo.com/bots/dem-bones/rss/index.rss">Subscribe to Bone RSS!</a></p>
</footer>`,
    maxEntriesPerPage: 20,
    generateRSS: true,
    fileAbstractionType: 'LocalGit',
    archiveBaseURL: 'https://smidgeo.com/bots/dem-bones',
    rssFeedOpts: {
      feed_url: 'https://smidgeo.com/bots/dem-bones/rss/index.rss',
      site_url: 'https://smidgeo.com/bots/dem-bones/'
    }
  }
};

var probable = require('probable');
var callNextTick = require('call-next-tick');

module.exports = {
  postingTargets: ['archive'],
  generateImageURL(done) {
    var url = 'http://jimkang.com/dem-bones/#hideControls=yes';
    var altText = 'Dem bones dem bones dem – dry bones!';
    var caption = '';
    if (probable.roll(10) === 0) {
      url += '&useExtraParts=yes';
      caption = 'Dem bones dem bones dem – extra bones!';
      altText += ' ' + caption;
    }
    callNextTick(done, null, { url, altText, caption });
  },
  shouldAutoCrop: true,
  webimageOpts: {
    screenshotOpts: {
      clip: {
        x: 0,
        y: 0,
        width: 1000,
        height: 1000
      }
    },
    viewportOpts: {
      width: 1000,
      height: 1000,
      deviceScaleFactor: 1
    }
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

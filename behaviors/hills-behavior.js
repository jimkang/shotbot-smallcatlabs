module.exports = {
  postingTargets: ['archive', 'mastodon', 'twitter'],
  webimageOpts: {
    url: 'http://jimkang.com/hills',
    screenshotOpts: {
      clip: {
        x: 0,
        y: 0,
        width: 1280,
        height: 720
      }
    },
    viewportOpts: {
      width: 1280,
      height: 720,
      deviceScaleFactor: 1
    },
    supersampleOpts: {
      desiredBufferType: 'png',
      resizeMode: 'bezier'
    }
  },
  archive: {
    name: 'Hills',
    title: 'Hills',
    idPrefix: 'hill',
    homeLink: 'https://smidgeo.com/bots/hills',
    rootPath: '/usr/share/nginx/html/smidgeo.com/bots/hills',
    footerHTML: `<footer>Want more hills? <a href="http://jimkang.com/hills">Go get you some.</a>
    <p><a href="https://smidgeo.com/bots/hills/rss/index.rss">Hills RSS</a></p>
</footer>`,
    maxEntriesPerPage: 20,
    generateRSS: true,
    fileAbstractionType: 'LocalGit',
    archiveBaseURL: 'https://smidgeo.com/bots/hills',
    rssFeedOpts: {
      feed_url: 'https://smidgeo.com/bots/hills/rss/index.rss',
      site_url: 'https://smidgeo.com/bots/hills/'
    }
  },
  getAltText() {
    return 'A hill.';
  },
  getCaption() {
    return '';
  }
};

module.exports = {
  postingTargets: ['archive'], //, 'twitter'],
  generateImageURL: require('../lib/state-maps/generate-state-map-image-url'),
  webimageOpts: {
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
    name: 'Fact maps!',
    idPrefix: 'fact-map-',
    footerHTML: ` <script type="text/javascript">
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-49491163-1', 'jimkang.com');
  ga('send', 'pageview');
</script>`,
    maxEntriesPerPage: 20
  },
  // TODO: These should all come from a callback.
  getAltText() {
    return 'Infomap!';
  },
  getCaption() {
    return '';
  }
};

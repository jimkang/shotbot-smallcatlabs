var Improvise = require('improvise-on-slots');
var sb = require('standard-bail')();
var qs = require('qs');
var config = require('../../configs/state-maps-config');

var states = [
  'AK',
  'AL',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY'
];

var improvise = Improvise({ wordnikAPIKey: config.wordnik.apiKey });

var improviseOpts = {
  keyType: 'state',
  keys: states
};

function generateStateMapImageURL(done) {
  improvise(improviseOpts, sb(composeURL, done));

  function composeURL({title, slots}) {
    var url = 'http://jimkang.com/state-maps/#' +
      `title=${encodeURIComponent(title)}&` + 
      qs.stringify(slots);
    done(null, url);
  }
}

module.exports = generateStateMapImageURL;


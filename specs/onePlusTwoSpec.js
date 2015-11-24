var webdriverio = require('webdriverio');
var assert = require('assert');

var options = {
    desiredCapabilities: {
        browserName: 'chrome'
    }
};

webdriverio
    .remote(options)
    .init()
    .url('http://juliemr.github.io/protractor-demo/')
    .title(function(err, res) {
        assert(res.value === 'Super Calculator');
    })
    .setValue('input[ng-model=first]', '1')
    .setValue('input[ng-model=second]', '2')
    .click('#gobutton')
    .pause(2500)
    .getText('h2.ng-binding')
    .then(function(value) {
      assert(value === '3');
    })
    .end();

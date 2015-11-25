(function() {
  describe('Super Calculator capabilities', function() {
    afterAll(function(browser) {
      browser.end();
    });

    it('should return 3 for 1 plus 2', function(done) {
      browser.url('/')
      .title(function(err, res) {
        expect(res.value).toBe('Super Calculator');
      })
      .setValue('input[ng-model=first]', '1')
      .setValue('input[ng-model=second]', '2')
      .click('#gobutton')
      .pause(2500)
      .getText('h2.ng-binding')
      .then(function(value) {
        expect(value).toBe('3');
      }).call(done);

    });

    it('should return 2 for 3 minus 1', function(done) {
      browser.url('/')
      .title(function(err, res) {
        expect(res.value).toBe('Super Calculator');
      })
      .setValue('input[ng-model=first]', '3')
      .setValue('input[ng-model=second]', '1')
      .selectByVisibleText('select[ng-model=operator]', '-')
      .click('#gobutton')
      .pause(2500)
      .getText('h2.ng-binding')
      .then(function(value) {
        expect(value).toBe('2');
      }).call(done);

    });
  });

})();

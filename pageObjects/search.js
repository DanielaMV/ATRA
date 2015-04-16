var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

    search: function (query) {
        element(by.css('#search > .form-control')).sendKeys(query);
        return browser.driver.sleep(3000);
    },

});

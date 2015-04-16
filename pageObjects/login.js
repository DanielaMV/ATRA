var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

    enter_email: function (email) {
        browser.driver.findElement(by.id('user_email')).sendKeys(email);
        return browser.driver.sleep(3000);
    },

    enter_password: function (password) {
    	browser.driver.findElement(by.id('user_password')).sendKeys(password);
        return browser.driver.sleep(3000);
    },

    login_button: function () {
    	return browser.driver.findElement(by.css('[value="Sign in"]'));
    },

    login: function (user) {
        this.enter_email(user.email);
        this.enter_password(user.password);
        return this.login_button().click();
    }

});

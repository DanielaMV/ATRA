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

    enter_password_confirm: function (password_confirm) {
    	browser.driver.findElement(by.id('user_password_confirmation')).sendKeys(password_confirm);
        return browser.driver.sleep(3000);
    },

    signup_button: function () {
    	return browser.driver.findElement(by.css('[value="Sign up"]'));
    },

    signup: function (user) {
        this.enter_email(user.email);
        this.enter_password(user.password);
        this.enter_password_confirm(user.password);
        return this.signup_button().click();
    }

});

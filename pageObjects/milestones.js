var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

	enter_milestone_time_frame: function (time_frame, at_index) {
		at_index = at_index || 1;
		element(by.css('.new-milestones-div > .new-milestones-form:nth-child(' + at_index + ') .new_psql_milestone .time-frame-text')).sendKeys(time_frame);
		return browser.driver.sleep(3000);
	},

	enter_milestone_description: function (description, at_index) {
		at_index = at_index || 1;
		element(by.css('.new-milestones-div > .new-milestones-form:nth-child(' + at_index + ') .milestone-description div[contenteditable="true"]')).sendKeys(description);
		return browser.driver.sleep(3000);
	},

	save_milestone: function () {
		return element(by.css('.save-milestone')).click();
	},

	save_all_milestones: function () {
		return element(by.id('save-all-milestones')).click();
	},

	get_milestones_count: function () {
		return element.all(by.css('.milestone-row'));
	},

	wait_for_milestones: function () {
		return browser.wait(element(by.css('#milestones-table > div:first-child')).isPresent);
	},

	soulmate_suggestion: function (title) {
		return element(by.xpath("//li[contains(@class, 'soulmate-suggestion') and normalize-space(text()) = '" + title + "']"));
	},

	get_milestones: function (type) {
		if(type === 'unclassified') type = '';
		return element.all(by.xpath("//ul[following-sibling::div[contains(@class, 'soulmate-type') and normalize-space(text()) = '" + type + "']]/li"));
	},

	add_new_milestone: function () {
		return element(by.id('add-new-milestone')).click();
	}

});

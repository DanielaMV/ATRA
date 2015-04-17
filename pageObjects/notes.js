var Factory = require('../lib/pageObject.js').PageObjectFactory;

module.exports = Factory.create({

    note_upload_input: function () {
        return element(by.id('psql_note_attachments'));
    },

    show_note_upload: function () {
        browser.driver.executeScript("document.getElementById('psql_note_attachments').removeAttribute('class')");
        return browser.driver.sleep(3000);
    },
	
	submit_note_button: function() {
		return element(by.id('post-note'));
	},
	
	open_edit_note: function() {
		return element(by.id('new_note_txt'));
	},
	
	soulmate_suggestion: function (title) {
		return element(by.xpath("//li[contains(@class, 'soulmate-suggestion') and normalize-space(text()) = '" + title + "']"));
	},
	
	count_notes_element: function () {
		var count = element(by.css("#notes .counter_notes.counter")).getText().then(function(text) {
			counter = text.replace(/\(|\)/g,'');
			counter = parseInt(counter);
			return counter;
        }); 
		return count;
	},
	
	write_text_note: function (test) {
		browser.switchTo().frame('psql_note_text_ifr');
        browser.switchTo().activeElement().sendKeys(test);
		browser.switchTo().defaultContent();
		return browser.driver.sleep(3000);
	},
	validate_notes_counter: function (before, after) {
		if (after != 0 && before < after){
    		return true;
    	}
    	else{
    		return false;
    	}
	},
	
	existing_note: function(test){
		expect(element(by.css('div > div.mdm-gray > p')).getText() == test); 
	},

});

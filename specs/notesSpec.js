describe("Notes", function() {

    var page = require("../pageObjects/notes.js");
    var data = require('../lib/data.js').data;	
	
    
    beforeEach(function() {
        isAngularSite(false);
        page.go("https://stage-rms.racap.com/companies/2531");
        dv.sleep(2000);
    });
    
    it('should post a note with validation on the notes count', function () {
    	var count_before = '';
        var count_after = 0;
    	count_before = page.count_notes_element();
    	page.show_note_upload().then(function () {
		expect(page.note_upload_input().isDisplayed()).toBe(true);
		dv.sleep(5000);
		page.open_edit_note().click();
        page.write_text_note('Test');
        expect(element(by.id('mceu_13')).isDisplayed()).toBe(true);
		page.soulmate_suggestion('Test Company').click();
		page.note_upload_input().sendKeys('C:\\Users\\march_000\\Documents\\Automation\\SW.png');
		dv.sleep(5000);
        page.submit_note_button().click();
        dv.sleep(5000);
        page.go("https://stage-rms.racap.com/companies/2531");
        count_after = page.count_notes_element();
        expect(page.validate_notes_counter(count_before,count_after)).toBe(true);
		});
		
    });

});
describe("Search", function() {

    var page = require("../pageObjects/search.js");
    var data = require('../lib/data.js').data;

    beforeEach(function() {
    	isAngularSite(false);
        page.go("http://127.0.0.1:3000");
        page.search('acad');
    });

    it('should search and display results for acadia', function () {
        expect(element(by.className('soulmate-type-container')).isDisplayed()).toBe(true);
        expect(element(by.className('soulmate-type-suggestions')).isDisplayed()).toBe(true);
        expect(element(by.css('.soulmate-type-suggestions > li:first-child')).getText()).toContain('ACADIA');
    });

    it('should navigate to Acadia company page', function () {
        element(by.css('.soulmate-type-suggestions > li:first-child')).click().then(function () {
            
            browser.sleep(8000);

            browser.getAllWindowHandles().then(function (handles) {
                var companyPage = handles[1];

                browser.switchTo().window(companyPage).then(function () {
                    browser.sleep(5000);
                    expect(element(by.id('company')).isPresent()).toBe(true);
                    expect(element(by.css('.page-intro > h1')).getText()).toContain('Acadia');
                });
            });

        });
    });

});

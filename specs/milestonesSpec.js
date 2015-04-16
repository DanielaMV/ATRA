describe("Search", function() {

    var page = require("../pageObjects/milestones.js");
    var data = require('../lib/data.js').data;

    
    beforeEach(function() {
    	isAngularSite(false);
        page.go("http://127.0.0.1:3000/companies/451");
    });


    // it('should trigger the auto complete checklist when typing the "@" symbol', function () {
    //     page.wait_for_milestones().then(function () {
    //         page.enter_milestone_description('@');
    //         expect(element(by.css('#milestones .panel-footer .soulmate')).isDisplayed()).toBe(true);
    //     });
    // }, 80000);


    // it('should create a basic milestone with no special objects (text only)', function () {
    //     test_single_milestone_creation();
    // }, 80000);


    // it('should create a milestone with a single legacy tag', function () {
    //     test_single_milestone_creation('legacy');
    // }, 80000);


    // it('should create a milestone with a single event', function () {
    //     test_single_milestone_creation('event');
    // }, 80000);


    // it('should create a milestone with a single product', function () {
    //     test_single_milestone_creation('product');
    // }, 80000);


    // it('should create a milestone with a single company', function () {
    //     test_single_milestone_creation('company');
    // }, 80000);


    // // TODO: COME BACK AND DO THIS
    // it('should create a milestone with an unclassified reference', function () {
    //     //SPECIAL CASE!
    // }, 80000);


    // // SHOULD CURRENTLY FAIL AS THERE ARE NO UNCLASSIFIED REFERENCES
    // // NEED TO DO SOME THINKING ON HOW WE WOULD LIKE TO HANDLE THAT FOR TESTING PURPOSES
    // it('should create a milestone with one of each object reference type', function () {
    //     page.wait_for_milestones().then(function () {

    //         var original_milestones_count;

    //         page.get_milestones_count().then(function (milestones) {
    //             original_milestones_count = milestones.length;
    //         });

    //         page.enter_milestone_time_frame('4Q13');

    //         ['legacy', 'event', 'product', 'company', 'unclassified'].forEach(function (object_reference) {
    //             page.enter_milestone_description(' @');
    //             page.get_milestones(object_reference).first().click();
    //         });

    //         page.enter_milestone_description(' testing other words here ');

    //         page.save_milestone().then(function () {
    //             dv.sleep(5000);
    //             // expect it to be in the list here..
    //             page.get_milestones_count().then(function (milestones) {
    //                 expect(milestones.length).toEqual(original_milestones_count + 1);
    //             });
    //         });
    //     });
    // }, 80000);


    it('should create multiple milestones and save all', function () {
        page.wait_for_milestones().then(function () {

            var original_milestones_count;

            page.get_milestones_count().then(function (milestones) {
                original_milestones_count = milestones.length;
            });

            // add two more milestone forms
            page.add_new_milestone().then(function () {
                dv.sleep(5000);
                page.add_new_milestone().then(function () {
                    dv.sleep(5000);

                    [1, 2, 3].forEach(function (nthChild) {
                        page.enter_milestone_time_frame('4Q13', nthChild);
                        page.enter_milestone_description(' testing multiple milestone creation! ', nthChild);
                    });

                    page.save_all_milestones().then(function () {
                        dv.sleep(8000);
                        // expect it to be in the list here..
                        page.get_milestones_count().then(function (milestones) {
                            expect(milestones.length).toEqual(original_milestones_count + 3);
                        });
                    });
                });
            });
        });
    }, 80000);


    function test_single_milestone_creation (object_reference) {
        page.wait_for_milestones().then(function () {

            var original_milestones_count;

            page.get_milestones_count().then(function (milestones) {
                original_milestones_count = milestones.length;
            });

            page.enter_milestone_time_frame('4Q13');

            if(object_reference !== undefined) {
                page.enter_milestone_description('@');
                // gets the list of the particular type of milestone, and clicks the first one present
                page.get_milestones(object_reference).first().click();
            }

            page.enter_milestone_description(' testing other words here');

            page.save_milestone().then(function () {
                dv.sleep(8000);
                // expect it to be in the list here..
                page.get_milestones_count().then(function (milestones) {
                    expect(milestones.length).toEqual(original_milestones_count + 1);
                });
            });
        });
    }

});

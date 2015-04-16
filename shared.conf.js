exports.config = {

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['specs/loginSpec.js', 'specs/notesSpec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 100000
    },

    onPrepare: function () {
        // If you need to interact with a non-Angular page, you may access the wrapped webdriver instance
        // directly with browser.driver. This is a an alias.
        global.dv = browser.driver;

        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };

        global.setWindowSize = function (size) {
            size = size || {
                width: 1600,
                height: 1000
            };

            browser.driver.manage().window().setSize(size.width, size.height);
        };

        // default window size to this
        global.setWindowSize();

    }

};

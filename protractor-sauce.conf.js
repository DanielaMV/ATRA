var _ = require('lodash');
var shared_config = require('./shared.conf.js');

exports.config = _.extend(shared_config.config, {

    // If sauceUser and sauceKey are specified, seleniumServerJar will be ignored.
    // The tests will be run remotely using SauceLabs.
    // sauceUser: 'jd_devinandrews',
    // sauceKey: 'f8d04cf9-2d2c-4b35-bbcd-940f8da479c6',
    sauceUser: process.env.SAUCE_USER,
    sauceKey: process.env.SAUCE_ACCESS_KEY,
    capabilities: {
        'tunnel-identifier': process.env.BUILD_NUMBER,
        'build': process.env.BUILD_NUMBER
    }

});

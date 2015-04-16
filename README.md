
1- Install all dependencies

    npm install

2- Install selenium standalon server and chrome driver (./bin/install.sh)

    ./node_modules/protractor/bin/webdriver-manager update

### Configuration

shared.conf.js
protractor.conf.js -- extends shared.conf.js
protractor-sauce.conf.js -- extends shared.conf.js


### Execute Tests locally using standalone Selenium server

1- Make sure your application is running
2- Run

    grunt test

#### Explanation

This script is actually doing the following steps:

1- Start selenium server

   ./bin/selenium-server.sh

2- Running protractor

   ./bin/test.sh

**Note:** Depending on your machine sometimes the test starts running before the selenium server actually started.
If this occurs to you, then on one terminal tab run:

    ./bin/selenium-server.sh

Wait for the server to come up and on a second tab:

    ./bin/test.sh

### Execute Tests remotely using Sauce Labs.

   1- Update the protractor-sauce.conf.js adding your user and key provided by Sauce Labs.
   2- From your command line run

        grunt test-sauce

#### Explanation

This script is actually doing the following steps:

    1- ./bin/test-sauce.sh

The configuration is in Gruntfile.js where we create two parallel executions with different arguments. Example:

    sauce: {
        tasks: [
            {cmd: "./bin/test-sauce.sh", args: ['--capabilities.browserName=safari']},
            {cmd: "./bin/test-sauce.sh", args: ['--capabilities.browserName=firefox']}
        ]
    }

### Execute Tests remotely using Sauce Labs per Browser

1- Make sure protractor-sauce.conf.js contains the user/key for sauce labs.
2- From Jenkins' job command line

    grunt test-sauce-browser --browser=safari


### Executing from Jenkins/Travis

#### Option 1

We could setup multiple jobs each one running on a different browser.
This provides granular feedback and the benefit of running in parallel.

Job 1:

    grunt test-sauce-browser --browser=safari

Job 2:

    grunt test-sauce-browser --browser=firefox

#### Option 2

We could have a unique job running on multiple browsers.

    grunt test-sauce


[MIT License](http://en.wikipedia.org/wiki/MIT_License)
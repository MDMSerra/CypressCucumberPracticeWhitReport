const fs = require('fs-extra');
const dir = './cucumber_report/html';

if(fs.existsSync(dir)){
    fs.removeSync(dir);
}
fs.mkdirSync(dir);

const reporter = require('cucumber-html-reporter');
const options = {
    theme: 'bootstrap',
    jsonDir: 'cucumber_report',
    output: 'cucumber_report/html/cucumber_report.html',
    reportSuiteAsScenarios: true,
    scenarioTimestamp: true,
    launcherReport: true,
    metadata: {

    }
};
reporter.generate(options);
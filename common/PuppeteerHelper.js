'use strict';
const I = actor();

let Helper = codecept_helper;

//https://github.com/Codeception/CodeceptJS/issues/914
class PuppeteerHelper extends Helper {

  async navByClick (locator) {
    I.click(locator);

    const page = this.helpers['Puppeteer'].page;
    await Promise.race([page.waitForNavigation({waitUntil: 'networkidle0'}), I.wait(5)]);
  }
}

module.exports = PuppeteerHelper;
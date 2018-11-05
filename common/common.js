
const I = actor();
const puppeteerHelper = require('./PuppeteerHelper.js');
const puHelper = new puppeteerHelper();

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  getUniqueStr(str){
    var timestamp = Date.parse(new Date());
    return str+'_'+timestamp;
  },

  //If it will jump to another page, you should call this method to wait the new paged loaded, otherwise, you should call 'I.click' for it's very fast.
  clickAndWaitUtillNavigation(ele){
    puHelper.navByClick(ele);
  },

  scrollToElement(ele){
    I.executeScript("arguments[0].scrollIntoView()", ele);
  },

  // takeScreenShotAndAttachToReport(name, fullscreen){
  //   var name = this.getUniqueStr(name) + '.png';
  //   if(fullscreen){
  //     I.saveScreenshot(name,fullscreen);
  //   }else{
  //     I.saveScreenshot(name);
  //   }
  //   I.addMochawesomeContext(name);
  // },

  takeScreenShot(name){
    var name = this.getUniqueStr(name) + '.png';
    I.saveScreenshot(name,true);
  }
}

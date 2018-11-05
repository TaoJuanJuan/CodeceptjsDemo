const I = actor();
let common = require('../common/common.js');

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  fields:{
    
  },
  url: '/enterprise/index',
  UDADLink: {'locate':'span', 'text':'账户及组'},
  dashboardIcon: '#enterprise_name_span',
  loginedAccountName: '.notifications-menu:nth-of-type(3) > a',
  logoutLink: 'i.i-sign-out',

  goDashboard(){
    I.waitForElement(this.dashboardIcon);
    I.click(this.dashboardIcon);
    this.verifyDashboardUrl();
  },

  goDashboardByUrl(){
    I.amOnPage(this.url);
    this.verifyDashboardUrl();
  },

  verifyDashboardUrl(){
    I.waitInUrl(this.url);
    // common.takeScreenShot('dashboard');
  },

  goUDADHome(){
    common.clickAndWaitUtillNavigation(locate(this.UDADLink.locate).withText(this.UDADLink.text));
  },

  doLogout(){
    I.click(this.loginedAccountName);
    I.waitForElement(this.logoutLink);
    common.clickAndWaitUtillNavigation(this.logoutLink);
  }
}

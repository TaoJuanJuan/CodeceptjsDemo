
const I = actor();
let common = require('../common/common.js');

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  fields:{
    username_id: '//input[@id="ITaccount"]', //#username
    password_id: '//input[@id="ITpassword"]' //#password
  },
  url: '/login',
  loginButton: '//input[@id="ITsub"]',

  doLogin(username, password){
    I.amOnPage(this.url);
    I.fillField(this.fields.username_id, username);
    I.fillField(this.fields.password_id, password);
    common.clickAndWaitUtillNavigation(this.loginButton);
  },

  verifyLoginUrl(){
    I.waitInUrl(this.url);
    // common.takeScreenShot('logout');
  }
}

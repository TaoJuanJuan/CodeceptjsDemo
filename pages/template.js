
const I = actor();

module.exports = {

  _init() {
    I = require('../steps_file.js')();
  },

  fields:{
    
  },
  url: '',

  verifyDashboardUrl(){
    I.seeCurrentUrlEquals(this.url);
  }
}

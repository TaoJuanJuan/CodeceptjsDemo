'use strict';

const I = actor();
let common = require('../../../common/common.js');

module.exports = {

  _init() {
    I = require('../../../steps_file.js')();
  },

  fields:{
    
  },
  importButton: {'locate':'em', 'class':'idpicon i-import'},
  //LDAP
  organizationImportLink_LDAP: '#ldapPullOrganize',
  organizationImportKeyTip_LDAP: {'locate':'p', 'text':'确定开始从LDAP导入组织机构？'},
  confirmImportButton_LDAP: '/html/body/div[6]/div/div/div[3]/button[1]',
  importingDataLabel_LDAP: {'locate':'p', 'text': 'LDAP数据导入中...'},
  //Excel
  organizationImportLink_Excel: '.import_ou',

  //UDAD tree
  root: {'locate': 'span', 'text': 'Department1'},


   verifyODADHome(){
     I.waitForElement(locate(this.importButton.locate).withAttr({ class: this.importButton.class }));
    //  common.takeScreenShot('ODADHome');
  },

  importOrg_LDAP(){
    I.click(locate(this.importButton.locate).withAttr({ class: this.importButton.class }));
    I.seeElement(this.organizationImportLink_LDAP);
    I.click(this.organizationImportLink_LDAP);

    I.seeElement(locate(this.organizationImportKeyTip_LDAP.locate).withText(this.organizationImportKeyTip_LDAP.text));
    I.click(this.confirmImportButton_LDAP);

    // I.seeElement(locate(this.importingDataLabel_LDAP.locate).withText(this.importingDataLabel_LDAP.text))
  },

  importOrg_Excel(){
    I.click(locate(this.importButton.locate).withAttr({ class: this.importButton.class }));

    //click import organization
    I.seeElement(this.organizationImportLink_Excel);
    I.click(this.organizationImportLink_Excel);
  }
}


'use strict';
let login = require('./pages/login.js');
let dashboard = require('./pages/dashboard.js');
let udad = require('./pages/user/accountAndGroup/udad.js');
let importOrgByExcel = require('./pages/user/accountAndGroup/importOrgByExcel.js');
let config = require('./common/config.js');

module.exports = function() {

  return actor({

    login(){
      login.doLogin(config.loginUsername, config.loginPassword);
      dashboard.verifyDashboardUrl();
    },

    goDashboard(){
      dashboard.goDashboardByUrl();
    },

    importOrganization_LDAP(){
      dashboard.goUDADHome();
      udad.verifyODADHome();
      udad.importOrg_LDAP();
    },

    importOrganization_Excel(){
      dashboard.goUDADHome();
      udad.verifyODADHome();
      udad.importOrg_Excel();
      importOrgByExcel.verifyImportOrgByExcelUrl();
      importOrgByExcel.uploadFile();
    },

    logout(){
      dashboard.doLogout();
      login.verifyLoginUrl();
    }
  });
}


const I = actor();
let config = require('../../../common/config.js');

module.exports = {

  _init() {
    I = require('../../../steps_file.js')();
  },

  fields:{
    uploadFileField: '#defaultFile'
  },
  url: '/enterprise/ud/ad/ou/form/import_excel',
  submitButton: '#submitForm',
  confirmToReplaceRoot: '#modalTipsSub1',
  confirmImportButton: '#submit_import',

  verifyImportOrgByExcelUrl(){
    I.seeInCurrentUrl(this.url);
  },

  uploadFile(){
    I.attachFile(this.fields.uploadFileField, config.uploadUDADFilePath_Excel);//'./resource/ou.xls'
    I.click(this.submitButton);
    I.waitForVisible(this.confirmToReplaceRoot);
    I.click(this.confirmToReplaceRoot);
    // I.wait(3);
    // I.click(this.confirmImportButton);
    // I.wait(5);
  }
}

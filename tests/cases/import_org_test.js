Feature('UDAD Feature');

BeforeSuite((I) => {
  I.login();
});

AfterSuite((I) => {
  I.goDashboard();
  I.logout();
});

Before((I) => {
    I.goDashboard();
});

Scenario('Import Org By LDAP @LDAP', (I) => {
    I.importOrganization_LDAP();
});

Scenario('Import Org By Excel', (I) => {
    I.importOrganization_Excel();
});







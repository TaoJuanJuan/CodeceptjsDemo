Feature('Login Feature');

BeforeSuite((I) => {

});

AfterSuite((I) => {

});

Before((I) => {

});

Scenario('Do Login IDP', (I) => {
    I.login();
});

Scenario('Do Logout', (I) => {
  I.logout();
});







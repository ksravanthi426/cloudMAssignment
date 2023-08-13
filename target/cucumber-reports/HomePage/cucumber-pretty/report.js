$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CloudMHomePage/CloudMRegistrationPage.feature");
formatter.feature({
  "name": "CloudM User Registration",
  "description": "  As a user, I want to click the \u0027My Account\u0027 link on the CloudM Homepage so that I can login or Register to the application.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Successful Registration",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "that I am on the CloudM Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "CloudMRegistrationPage.that_I_am_on_the_CloudM_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I locate the \u0027My Account\u0027 link",
  "keyword": "When "
});
formatter.match({
  "location": "CloudMRegistrationPage.i_locate_the_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to click on the \u0027My Account\u0027 link",
  "keyword": "Then "
});
formatter.match({
  "location": "CloudMRegistrationPage.i_should_be_able_to_click_on_the_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "it should navigate me to the login or registration page \u0027CloudM Portal\u0027 of the application",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMRegistrationPage.it_should_navigate_me_to_the_login_or_registration_page_of_the_application(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "click on the Registration link",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMRegistrationPage.click_on_the_Registration_link()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Fill the registration Form with the below Details",
  "rows": [
    {
      "cells": [
        "Email",
        "FirstName",
        "LastName",
        "Password",
        "RetypePassword",
        "SelectDropdown"
      ]
    },
    {
      "cells": [
        "ksravanthi426@gmail.com",
        "Sravanthi",
        "Koduri",
        "Keerthana@426",
        "Keerthana@426",
        "CloudM Migrate to Google Workspace"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CloudMRegistrationPage.fill_the_registration_Form_with_the_below_Details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Click on Check box",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMRegistrationPage.Click_on_Check_box()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "Click on Create Account button",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMRegistrationPage.Click_on_Create_Account_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});
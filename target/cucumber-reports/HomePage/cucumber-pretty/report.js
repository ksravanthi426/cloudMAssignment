$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/CloudMHomePage/CloudMRegistrationPage.feature");
formatter.feature({
  "name": "Accessing CloudM Portal Registration",
  "description": "  As a user I want to click on the \u0027Portal\u0027 link on the cloudM HomePage so that I can Register to the CloudM Portal",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Clicking on the \u0027Portal\u0027 link to register for CloudM Portal",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "I click on the \u0027Portal\u0027 link",
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
  "name": "I should be redirected to the \u0027CloudM Portal\u0027 registration page",
  "keyword": "Then "
});
formatter.match({
  "location": "CloudMRegistrationPage.I_should_be_redirected_to_the_registration_page(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d115.0.5790.171)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BEHB25P\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.171, chrome: {chromedriverVersion: 115.0.5790.170 (cc0d30c2ca5..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60265}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4e954fecc6f195813e3baa895194e34b\n*** Element info: {Using\u003dxpath, value\u003d//h1[text()\u003d\u0027CloudM Portal\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat WebConnector.webconnector.FindAnElement(webconnector.java:183)\r\n\tat stepdefs.CloudMRegistrationPage.I_should_be_redirected_to_the_registration_page(CloudMRegistrationPage.java:69)\r\n\tat ✽.I should be redirected to the \u0027CloudM Portal\u0027 registration page(file:src/test/resources/features/CloudMHomePage/CloudMRegistrationPage.feature:9)\r\n",
  "status": "failed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "I am on the CloudM Portal registration page",
  "keyword": "Given "
});
formatter.match({
  "location": "CloudMRegistrationPage.click_on_the_Registration_link()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "I enter my details:",
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
  "keyword": "When "
});
formatter.match({
  "location": "CloudMRegistrationPage.I_enter_my_details(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Check box",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMRegistrationPage.Click_on_Check_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Click on Create Account button",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMRegistrationPage.Click_on_Create_Account_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "I should see a confirmation message",
  "keyword": "Then "
});
formatter.match({
  "location": "CloudMRegistrationPage.I_should_see_a_confirmation_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d115.0.5790.171)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BEHB25P\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.171, chrome: {chromedriverVersion: 115.0.5790.170 (cc0d30c2ca5..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60265}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4e954fecc6f195813e3baa895194e34b\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\r\n\tat WebConnector.webconnector.saveScreenshotsForScenario(webconnector.java:89)\r\n\tat WebConnector.webconnector.closeDriver(webconnector.java:78)\r\n\tat ConstantVariables.Hooks.after(Hooks.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:26)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:20)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:65)\r\n\tat cucumber.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:16)\r\n\tat cucumber.runner.TestStep.executeStep(TestStep.java:65)\r\n\tat cucumber.runner.TestStep.run(TestStep.java:50)\r\n\tat cucumber.runner.TestCase.run(TestCase.java:50)\r\n\tat cucumber.runner.Runner.runPickle(Runner.java:50)\r\n\tat io.cucumber.testng.TestNGCucumberRunner.runScenario(TestNGCucumberRunner.java:69)\r\n\tat io.cucumber.testng.AbstractTestNGCucumberTests.runScenario(AbstractTestNGCucumberTests.java:24)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:568)\r\n\tat org.testng.internal.MethodInvocationHelper.invokeMethod(MethodInvocationHelper.java:124)\r\n\tat org.testng.internal.Invoker.invokeMethod(Invoker.java:583)\r\n\tat org.testng.internal.Invoker.invokeTestMethod(Invoker.java:719)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:71)\r\n\tat org.testng.internal.TestMethodWithDataProviderMethodWorker.call(TestMethodWithDataProviderMethodWorker.java:14)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.Executors$RunnableAdapter.call(Executors.java:539)\r\n\tat java.base/java.util.concurrent.FutureTask.run(FutureTask.java:264)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor.runWorker(ThreadPoolExecutor.java:1136)\r\n\tat java.base/java.util.concurrent.ThreadPoolExecutor$Worker.run(ThreadPoolExecutor.java:635)\r\n\tat java.base/java.lang.Thread.run(Thread.java:833)\r\n",
  "status": "failed"
});
formatter.uri("file:src/test/resources/features/CloudMHomePage/CloudMSubmitDealRegistration.feature");
formatter.feature({
  "name": "MouseHover and Click on Register a Deal Link from For Partners",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "User registers a deal on CloudM Home Page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
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
  "name": "the user is on the CloudM Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "CloudMSubmitSupportTicketStepDef.the_user_is_on_the_CloudM_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user mouse hovers over the \"For Partners\" link",
  "keyword": "When "
});
formatter.match({
  "location": "CloudMSubmitSupportTicketStepDef.the_user_mouse_hovers_over_the_link(String)"
});
formatter.result({
  "status": "passed"
});
formatter.beforestep({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on the \"Register a Deal\" link from the dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMSubmitSupportTicketStepDef.the_user_clicks_on_the_link_from_the_dropdown_menu(String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[@title\u003d\"For Partners\" and @href\u003d\"https://www.cloudm.io/partners\" and @class\u003d\"nowrap text-primary no-underline main-nav-link inline-block px-1\"]\"}\n  (Session info: chrome\u003d115.0.5790.171)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BEHB25P\u0027, ip: \u0027192.168.0.6\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002717.0.8\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 115.0.5790.171, chrome: {chromedriverVersion: 115.0.5790.170 (cc0d30c2ca5..., userDataDir: C:\\Users\\Dell\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:60265}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nSession ID: 4e954fecc6f195813e3baa895194e34b\n*** Element info: {Using\u003dxpath, value\u003d//a[@title\u003d\"For Partners\" and @href\u003d\"https://www.cloudm.io/partners\" and @class\u003d\"nowrap text-primary no-underline main-nav-link inline-block px-1\"]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:77)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:499)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:480)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat WebConnector.webconnector.FindAnElement(webconnector.java:183)\r\n\tat stepdefs.CloudMSubmitSupportTicketStepDef.the_user_clicks_on_the_link_from_the_dropdown_menu(CloudMSubmitSupportTicketStepDef.java:51)\r\n\tat ✽.the user clicks on the \"Register a Deal\" link from the dropdown menu(file:src/test/resources/features/CloudMHomePage/CloudMSubmitDealRegistration.feature:7)\r\n",
  "status": "failed"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "the user should be navigated to the \"Deal Registration\" page",
  "keyword": "Then "
});
formatter.match({
  "location": "CloudMSubmitSupportTicketStepDef.the_user_should_be_navigated_to_the_page(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "Fill the Register a Deal form with below Details",
  "rows": [
    {
      "cells": [
        "YourComapanyName",
        "YourDistributor",
        "YourFirstName",
        "YourLastName",
        "YourJobTitle",
        "YourEmail",
        "YourPhoneNumber",
        "CustomerCompanyNaame",
        "CustomerFirstName",
        "CustomerLastName",
        "CustomerJobTitle",
        "CustomerContactEmail",
        "CustomeContactPhoneNumber",
        "LicenseCount"
      ]
    },
    {
      "cells": [
        "CloudM",
        "AutomationTest",
        "Sravanthi",
        "Koduri",
        "Test Automation Engineer",
        "ksravanthi426@gmail.com",
        "+44-7424699531",
        "Cognizant",
        "Test",
        "AutomationTester",
        "Senior Test Automation Engineer",
        "AutomationTest@cognizant.com",
        "+44-7424699531",
        "5"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "CloudMSubmitSupportTicketStepDef.the_page_contains_fields_for_subject_description_and_priority(DataTable)"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "click on the Submit button",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMSubmitSupportTicketStepDef.there_is_a_button_on_the_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.beforestep({
  "status": "skipped"
});
formatter.step({
  "name": "validate the success message \"Thank you for contacting us!\"",
  "keyword": "And "
});
formatter.match({
  "location": "CloudMSubmitSupportTicketStepDef.validate_the_success_message(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});
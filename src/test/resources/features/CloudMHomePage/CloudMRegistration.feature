Feature: CloudM Home Page Verifications

  @Regression
  Scenario: Successful Registration
  		Given that I am on the CloudM Homepage
    	When I locate the 'My Account' link
    	Then I should be able to click on the 'My Account' link
    	And it should navigate me to the login or registration page of the application
    	And 

Feature: CloudM User Registration
  As a user, I want to click the 'My Account' link on the CloudM Homepage so that I can login or Register to the application.

@Regression1
  Scenario: Successful Registration
  Given that I am on the CloudM Homepage
  When I locate the 'My Account' link
  Then I should be able to click on the 'My Account' link
  And it should navigate me to the login or registration page 'CloudM Portal' of the application
  And click on the Registration link
  And Fill the registration Form with the below Details
    |Email|FirstName|LastName|Password|RetypePassword|SelectDropdown|
    |ksravanthi426@gmail.com|	Sravanthi	|Koduri	|Keerthana@426|	Keerthana@426|CloudM Migrate to Google Workspace|
  And Click on Check box
  And Click on Create Account button
  
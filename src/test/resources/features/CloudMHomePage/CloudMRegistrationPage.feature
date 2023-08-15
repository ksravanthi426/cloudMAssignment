
Feature: Accessing CloudM Portal Registration
  As a user I want to click on the 'Portal' link on the cloudM HomePage so that I can Register to the CloudM Portal
   
 @Regression
  Scenario: Clicking on the 'Portal' link to register for CloudM Portal
    Given that I am on the CloudM Homepage
    When I click on the 'Portal' link
    Then I should be redirected to the 'CloudM Portal' registration page
    Given I am on the CloudM Portal registration page
    When I enter my details:
    |Email|FirstName|LastName|Password|RetypePassword|SelectDropdown|
    |ksravanthi426@gmail.com|	Sravanthi	|Koduri	|Keerthana@426|	Keerthana@426|CloudM Migrate to Google Workspace|
    And Click on Check box
    And Click on Create Account button
    Then I should see a confirmation message
  
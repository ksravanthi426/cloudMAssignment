Feature: MouseHover and Click on Register a Deal Link from For Partners

As a user I want to Mouse Hover for Partners link and click on the Register a Deal Link on the 
CloudMHome Page so that I can register the deal

  @Regression @TC02
  Scenario: User registers a deal on CloudM Home Page
			Given the user is on the CloudM Home Page
			When the user mouse hovers over the "For Partners" link
			And the user clicks on the "Register a Deal" link from the dropdown menu
			Then the user should be navigated to the "Deal Registration" page
			And Fill the Register a Deal form with below Details
			|YourComapanyName|YourDistributor|YourFirstName|YourLastName|YourJobTitle|YourEmail|YourPhoneNumber|CustomerCompanyNaame|CustomerFirstName|CustomerLastName|CustomerJobTitle|CustomerContactEmail|CustomeContactPhoneNumber|LicenseCount|
			|CloudM|AutomationTest|Sravanthi|Koduri|Test Automation Engineer|ksravanthi426@gmail.com|+44-7424699531|Cognizant|Test|AutomationTester|Senior Test Automation Engineer|AutomationTest@cognizant.com|+44-7424699531|5|
			And click on the Submit button
			And validate the success message "Thank you for contacting us!"
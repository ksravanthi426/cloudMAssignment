package stepdefs;

import static WebConnector.webconnector.driver;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;

import ApplicationPages.CloudMHomePage;
import WebConnector.webconnector;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CloudMSubmitSupportTicketStepDef extends webconnector {

	private CloudMHomePage homePage;
	private String scenDesc;
	webconnector wc=new webconnector();
	  public CloudMSubmitSupportTicketStepDef() {
	        this.homePage = new CloudMHomePage();
	    }

	@Given("the user is on the CloudM Home Page")
	public void the_user_is_on_the_CloudM_Home_Page() throws Exception {
	    
		this.homePage.goToHomePage();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.MICROSECONDS);
		if(FindAnElement("Accept_Cookies").isDisplayed())
		{
		this.homePage.clickOnAcceptCookies();
		}
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	}

	@When("the user mouse hovers over the {string} link")
	public void the_user_mouse_hovers_over_the_link(String string) throws Exception {
		/*
		 * WebElement element= FindAnElement("CloudM_ForPartners");
		 * this.homePage.mouseHover(element);
		 */
	    
	}

	@When("the user clicks on the {string} link from the dropdown menu")
	public void the_user_clicks_on_the_link_from_the_dropdown_menu(String string) throws Exception {
		 WebElement element1= FindAnElement("CloudM_ForPartners");
		 WebElement element2= FindAnElement("CloudM_DealRegistration");
		Actions action=new Actions(driver);
    	action.moveToElement(element1).moveToElement(element2).click().build().perform();
		//this.wc.PerformActionOnElement("CloudM_DealRegistration", "Click", "");
	}

	@Then("the user should be navigated to the {string} page")
	public void the_user_should_be_navigated_to_the_page(String expectedText) throws Exception {
	    WebElement locatorValue=this.wc.FindAnElement("CloudM_DealRegistrationPageTitle");
	    this.homePage.verifyText(locatorValue, expectedText);
	    WebElement element=this.wc.FindAnElement("CloudM_DealRegistration_CompanyName");
	    this.homePage.scrollToElement(element);
	}

	@Then("Fill the Register a Deal form with below Details")
	public void the_page_contains_fields_for_subject_description_and_priority(DataTable dataTable) throws Exception {
	    
		List<Map<String, String>> details = dataTable.asMaps(String.class, String.class);

        for (Map<String, String> row : details) {
            String yourComapanyName = row.get("YourComapanyName");
            String yourDistributor = row.get("YourDistributor");
            String yourFirstName = row.get("YourFirstName");
            String yourLastName = row.get("YourLastName");
            String yourJobTitle = row.get("YourJobTitle");
            String yourEmail=row.get("YourEmail");
            String yourPhoneNumber=row.get("YourPhoneNumber");
            String customerCompanyNaame=row.get("CustomerCompanyNaame");
            String customerFirstName=row.get("CustomerFirstName");
            String customerLastName=row.get("CustomerLastName");
            String customerJobTitle=row.get("CustomerJobTitle");
            String customerContactEmail=row.get("CustomerContactEmail");
            String customeContactPhoneNumber=row.get("CustomeContactPhoneNumber");
            String licenseCount=row.get("LicenseCount");

             this.wc.PerformActionOnElement("CloudM_DealRegistration_CompanyName", "Type", yourComapanyName);
             this.wc.PerformActionOnElement("CloudM_DealRegistration_DistributorName", "Type", yourDistributor);
             this.wc.PerformActionOnElement("CloudM_DealRegistration_FirstName", "Type", yourFirstName);
             this.wc.PerformActionOnElement("CloudM_DealRegistration_LastName", "Type", yourLastName);
             this.wc.PerformActionOnElement("CloudM_DealRegistration_JobTitle", "Type", yourJobTitle);
             WebElement scrollelement1=this.wc.FindAnElement("CloudM_DetailRegistration_CustomerCompanyName");
             this.homePage.scrollToElement(scrollelement1);
             WebElement companyCountry=this.wc.FindAnElement("CloudM_DealRegistration_CompanyCountry");
             this.homePage.selectdropdownValue(companyCountry, "United Kingdom");
             this.wc.PerformActionOnElement("CloudM_DealRegistration_ContactEmail", "Type", yourEmail);
             this.wc.PerformActionOnElement("CloudM_DetailRegistration_PhoneNumber", "Type", yourPhoneNumber);
             this.wc.PerformActionOnElement("CloudM_DetailRegistration_CustomerCompanyName", "Type", customerCompanyNaame);
             this.wc.PerformActionOnElement("CloudM_DealRegistration_CustomerFirstName", "Type", customerFirstName);
             this.wc.PerformActionOnElement("CloudM_DealRegistration_CustomerLastName", "Type", customerLastName);
             this.wc.PerformActionOnElement("CloudM_DealRegistration_CustomerJobTitle", "Type", customerJobTitle);
             WebElement customerCompanyCountry=this.wc.FindAnElement("CloudM_DealRegistration_CustomerCompanyCountry");
             this.homePage.selectdropdownValue(customerCompanyCountry, "United Kingdom");
             this.wc.PerformActionOnElement("CloudM_DealRegistration_CustomerContactEmail", "Type", customerContactEmail);
             WebElement scrollelement2=this.wc.FindAnElement("CloudM_DetailRegistration_DealofTimeFrame");
             this.homePage.scrollToElement(scrollelement2);
             this.wc.PerformActionOnElement("CloudM_DetailRegistration_CustomerPhoneNumber", "Type", customeContactPhoneNumber);
             WebElement customerOpportunity=this.wc.FindAnElement("CloudM_DetailRegistration_Opportunity");
             this.homePage.selectdropdownValue(customerOpportunity, "Archive");
             this.wc.PerformActionOnElement("CloudM_DetailRegistration_LicensesCount", "Type", licenseCount);
             WebElement customerDealTimeFrame=this.wc.FindAnElement("CloudM_DetailRegistration_DealofTimeFrame");
             this.homePage.selectdropdownValue(customerDealTimeFrame, "Immediately");
             WebElement scrollelement3=this.wc.FindAnElement("CloudM_DetailRegistration_Submit");
             this.homePage.scrollToElement(scrollelement3);
             
        }
	}

	@Then("click on the Submit button")
	public void there_is_a_button_on_the_page() throws Exception {
	   // WebElement element=this.wc.FindAnElement("CloudM_DetailRegistration_Submit");
		//this.homePage.verifyText(element, expectedButtonName);
	    this.wc.PerformActionOnElement("CloudM_DetailRegistration_Submit", "Click", "");
	    Thread.sleep(50000);
	}
	@Then("validate the success message {string}")
	public void validate_the_success_message(String expectedSuccessMessage) throws Exception {
	   WebElement element=this.wc.FindAnElement("CloudM_DetailRegistration_SubmitSuccessMessage");
		this.homePage.verifyText(element, expectedSuccessMessage);
		Thread.sleep(5000);
	    
	}
}

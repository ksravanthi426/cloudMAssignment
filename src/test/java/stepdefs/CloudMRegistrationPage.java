package stepdefs;

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebElement;
import org.testng.annotations.Test;

import ApplicationPages.CloudMHomePage;
import WebConnector.webconnector;
import io.cucumber.core.api.Scenario;
import io.cucumber.datatable.DataTable;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CloudMRegistrationPage extends webconnector {
	private CloudMHomePage homePage;
	private String scenDesc;
	webconnector wc=new webconnector();
	  public CloudMRegistrationPage() {
	        this.homePage = new CloudMHomePage();
	    }
	@Given("that I am on the CloudM Homepage")
	public void that_I_am_on_the_CloudM_Homepage() throws Exception {
		this.homePage.goToHomePage();
		driver.manage().timeouts().implicitlyWait(20, TimeUnit.MICROSECONDS);
		if(FindAnElement("Accept_Cookies").isDisplayed())
		{
		this.homePage.clickOnAcceptCookies();
		}
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);	
	}
	@When("I click on the {string} link")
	public void i_locate_the_link(String string) throws Exception {
	   
		System.out.println("Executed the Rigistration Page");
		 this.homePage.clickOnHiddenElement(FindAnElement("My_AccountLink"));
		 this.homePage.windowHandle();

	}

	@Then("I should be able to click on the {string} link")
	public void i_should_be_able_to_click_on_the_link(String string) throws Exception {
		 System.out.println("Executed the Rigistration Page");
		 this.homePage.clickOnHiddenElement(FindAnElement("My_AccountLink"));
			/*
			 * if(FindAnElement("Accept_Cookies").isDisplayed()) {
			 *  }
			 */
		 this.homePage.windowHandle();
		 
	}
	@Then("I should be redirected to the {string} registration page")
	public void I_should_be_redirected_to_the_registration_page(String expectedPageTitle) throws Exception {
	    System.out.println("Executed the Rigistration Page");
	    try 
	    {
	    	this.homePage.clickOnAcceptCookies();
	    	}
	    catch (Exception e) {
			// TODO: handle exception
		}
	    WebElement element=this.wc.FindAnElement("CloudM_Portal");
	    this.homePage.verifyText(element,expectedPageTitle);
	    
	}
	@Then("I am on the CloudM Portal registration page")
	public void click_on_the_Registration_link() throws Exception
	
	{

		this.wc.PerformActionOnElement("CloudM_Registration", "Click", "");
	}
	@Given("I enter my details:")
	public void I_enter_my_details(DataTable dataTable) throws Exception {
		List<Map<String, String>> details = dataTable.asMaps(String.class, String.class);

        for (Map<String, String> row : details) {
            String email = row.get("Email");
            String firstName = row.get("FirstName");
            String lastName = row.get("LastName");
            String password = row.get("Password");
            String retypePassword = row.get("RetypePassword");
            String seclectDropDownValue=row.get("SelectDropdown");

             this.wc.PerformActionOnElement("CloudM_Registration_Email", "Type", email);
             this.wc.PerformActionOnElement("CloudM_Registration_FirstName", "Type", firstName);
             this.wc.PerformActionOnElement("CloudM_Registration_LastName", "Type", lastName);
             this.wc.PerformActionOnElement("CloudM_Registration_Password", "Type", password);
             this.wc.PerformActionOnElement("CloudM_Registration_RetypePassword", "Type", retypePassword);
             WebElement element=this.wc.FindAnElement("CloudM_Registration_SelectCloudMProduct");
             this.homePage.selectdropdownValue(element,seclectDropDownValue);
            
        }
	}
	@Then("Click on Check box")
	public void Click_on_Check_box() throws Exception
	{
	this.wc.PerformActionOnElement("CloudM_Registration_CheckBoxId", "Click", "");	
	}
    @Then("Click on Create Account button")
    public void Click_on_Create_Account_button() throws Exception
    {
    	this.wc.PerformActionOnElement("CloudM_Registration_CreateAccount", "Click", "");
    	
    }

    @Then("I should see a confirmation message")
    public void I_should_see_a_confirmation_message() throws Exception
    {
    	String expectedText="Couldn't save user.";
    	WebElement element=wc.FindAnElement("CloudM_Registration_ConfirmationMessage2");
    	this.homePage.verifyText(element, expectedText);
    	System.out.println("Registration confirmation message validated successfully");
    	
    	
    }
}


package stepdefs;

import java.io.IOException;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import ApplicationPages.Homepage;
import WebConnector.webconnector;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;

public class HomePageSteps extends webconnector {
    private Homepage homePage;

    public HomePageSteps() {
        this.homePage = new Homepage();
    }
    
   
    @Given("^User navigates to QATechTesting HomePage$")
    public void aUserNavigatesToHomePage() throws InvalidFormatException, IOException, InterruptedException {
        this.homePage.goToHomePage();
        Thread.sleep(10000);
    }
    @Then("^User verify that Blog Link is displayed$")
    public void googleLogoIsDisplayed() throws Exception {
        this.homePage.checkBlogLinkDisplay();
    }
}

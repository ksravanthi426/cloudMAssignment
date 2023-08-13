package ApplicationPages;

import static WebConnector.webconnector.driver;

import java.io.IOException;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import org.testng.Assert;

import WebConnector.webconnector;



public class CloudMHomePage {
	webconnector wc=new webconnector();
    public void goToHomePage() throws InvalidFormatException, IOException{
    	String URL=wc.getSpecificColumnData("./src/test/testdata/data.xlsx","sheet2", "URL");
        driver.get(URL);
        wc.waitForCondition("PageLoad","",60);
    }
    
    public void clickOnAcceptCookies()
    {
    	try {
    		
			wc.PerformActionOnElement("Accept_Cookies","Click","");
		} catch (Exception e) {
			
		}
    }
    public void clickOnHiddenElement(WebElement element)
    {
    	JavascriptExecutor js = (JavascriptExecutor)driver;
    	js.executeScript("arguments[0].click();", element);
    	
    }
    public void verifyText(String expectedText) throws Exception
    {
    	WebElement cloudMPortal= wc.FindAnElement("CloudM_Portal");
    	String actualText=cloudMPortal.getText();
    	Assert.assertEquals(expectedText, actualText);
		System.out.println("Validation Completed Successfully");
    }
    public void selectdropdownValue(String selectByName) throws Exception
    {
    	Select select =new Select(wc.FindAnElement("CloudM_Registration_SelectCloudMProduct"));
    	select.selectByVisibleText(selectByName);
    
    }
    }


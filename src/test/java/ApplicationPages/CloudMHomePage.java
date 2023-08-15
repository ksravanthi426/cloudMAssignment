package ApplicationPages;

import static WebConnector.webconnector.driver;

import java.io.IOException;
import java.util.Iterator;
import java.util.Set;

import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
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
    public void windowHandle()
    {
    	// Get the handles of all open windows
        Set<String> windowHandles = driver.getWindowHandles();

        // Switch to the new window
        for (String handle : windowHandles) {
            if (!handle.equals(driver.getWindowHandle())) {
                driver.switchTo().window(handle);
                break;
            }
        }
     // Perform actions in the new window
        String newWindowTitle = driver.getTitle();
        System.out.println("Title of new window: " + newWindowTitle);
    	
    }
    
    public void mouseHover(WebElement mousehoverElement)
    {
    	Actions action=new Actions(driver);
    	action.moveToElement(mousehoverElement).build().perform();
    }
    public void clickOnHiddenElement(WebElement element)
    {
    	JavascriptExecutor js = (JavascriptExecutor)driver;
    	js.executeScript("arguments[0].click();", element);
    	
    }
    public void scrollToElement(WebElement element)
    {
    	((JavascriptExecutor) driver).executeScript("arguments[0].scrollIntoView(true);", element);
    }
    public void verifyText(WebElement elementLocator, String expectedText) throws Exception
    {
    	String actualText=elementLocator.getText();
    	Assert.assertEquals(actualText,expectedText);
		System.out.println("Validation Completed Successfully");
    }
    public void selectdropdownValue(WebElement element,String selectByName) throws Exception
    {
    	Select select =new Select(element);
    	select.selectByVisibleText(selectByName);
    
    }
    }


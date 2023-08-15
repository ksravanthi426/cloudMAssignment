package runner;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;

import io.cucumber.testng.AbstractTestNGCucumberTests;
import io.cucumber.testng.CucumberOptions;

@CucumberOptions( tags = {"@Regression"},glue = {"stepdefs","ConstantVariables"}, plugin = {"html:target/cucumber-reports/CloudMHomePage/cucumber-pretty","json:target/json-cucumber-reports/cloudMHomePage/cukejson.json",
		"testng:target/testng-cucumber-reports/CloudMHomePage/cuketestng.xml" }, features = {"src/test/resources/features"})
public class HomePageRunner extends AbstractTestNGCucumberTests  {
	
	@BeforeClass
	public static void before() {
		System.out.println("Before - "+System.currentTimeMillis());
	}
	
	@AfterClass
	public static void after() {
		System.out.println("After - "+System.currentTimeMillis());
		 
	}
	

}

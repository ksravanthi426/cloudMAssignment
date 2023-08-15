package ConstantVariables;
import WebConnector.webconnector;
import io.cucumber.java.Before;
import io.cucumber.core.api.Scenario;
import io.cucumber.java.After;
import io.cucumber.java.BeforeStep;

public class Hooks extends webconnector {
	private String scenDesc;
	 @Before
		public void before(Scenario scenario) {
			this.scenDesc = scenario.getName();
			setUpDriver();
		}
	    
	    @After
	    public void after(Scenario scenario){
	    	
	    	closeDriver(scenario);
	    	
	    }
	    
		
		@BeforeStep
		public void beforeStep() throws InterruptedException {
			Thread.sleep(10000);
		}
}

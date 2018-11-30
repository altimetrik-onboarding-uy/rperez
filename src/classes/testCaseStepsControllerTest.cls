@isTest
private class testCaseStepsControllerTest {
    @isTest
    static void getStepsTest(){
        
        Test.startTest();
        Project__c p = new Project__c();
        Test_Case__c tCase = new Test_Case__c();
        Test_Case_Step__c step = new Test_Case_Step__c();
        dataFactory.createProject(p);
        dataFactory.createTestCase(p, tCase);
        dataFactory.createTestCaseStep(step, tCase);
        
        testCaseStepsController.getSteps(tCase.Id);
        Test.stopTest();
        
    }
    
    @isTest
    static void updateStepsListTest(){
        Test.startTest();
        List<Test_Case_Step__c> stepList = new List<Test_Case_Step__c>();
        Project__c p = new Project__c();
        Test_Case__c tCase = new Test_Case__c();
        Test_Case_Step__c step = new Test_Case_Step__c();
        dataFactory.createProject(p);
        dataFactory.createTestCase(p, tCase);
        dataFactory.createTestCaseStep(step, tCase);
        stepList.add(step);
        testCaseStepsController.updateStepsList(stepList);
        Test.stopTest();
        
    }
}
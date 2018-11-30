@isTest
public class projectTileControllerTest {
    @isTest
    static void getProjectsTest(){
        Test.startTest();
        Project__c p = new Project__c();
        dataFactory.createProject(p);
        projectTileController.getProjects();
        Test.stopTest();
    }
    @isTest
    static void getCasesTest(){
        Test.startTest();
        Project__c p = new Project__c();
        dataFactory.createProject(p);
        Test_Case__c tCase = new Test_Case__c();
        dataFactory.createTestCase(p, tCase);
        projectTileController.getCases(p);
        Test.stopTest();
    }
    @isTest
    static void deleteTestCaseTest(){
        Test.startTest();
        Project__c p = new Project__c();
        dataFactory.createProject(p);
        Test_Case__c tCase = new Test_Case__c();
        dataFactory.createTestCase(p, tCase);
        projectTileController.deleteTestCase(tCase);
        Test.stopTest();
    }
    @isTest
    static void createTestCaseTest(){
        Test.startTest();
        Project__c p = new Project__c();
        dataFactory.createProject(p);
        Test_Case__c tCase = new Test_Case__c();
        tCase.Project__c = p.Id;
        tCase.Title__c = 'test Title';
        tCase.Description__c = 'test description';
        tCase.Preconditions__c = 'test preconditions';
        tCase.User_Story__c = 'test.com';
        projectTileController.createTestCase(tCase, p);
        Test.stopTest();
    }
}
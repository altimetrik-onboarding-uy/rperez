@isTest
private  class ongoingProjectsBatchTest {
    @isTest
    static void myTest(){
        
        Test.startTest();
        Project__c p = new Project__c();
        Test_Case__c tCase = new Test_Case__c();
        
        dataFactory.createProject(p);
        dataFactory.createTestCase(p, tCase);
        
        ongoingProjectsBatch b = new ongoingProjectsBatch();
        Database.executeBatch(b);
        Test.stopTest();
    }
}
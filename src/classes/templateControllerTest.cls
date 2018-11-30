@isTest
private class templateControllerTest {
    @isTest
    static void getprojectListTest(){
        Test.startTest();
        Project__c p = new Project__c();
        dataFactory.createProject(p);
        templateController con = new templateController();
        Id owner = p.OwnerId;
        con.getprojectList();
        Test.stopTest();
    }
}
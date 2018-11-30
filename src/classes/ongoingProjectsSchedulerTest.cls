@isTest
public class ongoingProjectsSchedulerTest {
    public static String CRON_EXP = '0 0 0 15 3 ? 2022';
    @isTest
    static void myTest(){
        
        Test.startTest();
        Project__c p = new Project__c();
        Test_Case__c tCase = new Test_Case__c();
        dataFactory.createProject(p);
        dataFactory.createTestCase(p, tCase);
        
        
        
        String jobId = System.schedule('ScheduledApexTest',
            CRON_EXP, 
            new ongoingProjectsScheduler());
        Test.stopTest();
    }
}
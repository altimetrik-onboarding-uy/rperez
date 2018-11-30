public class dataFactory {
    public static Project__c createProject(Project__c p){
        p.Name = 'Test Project n';
        p.Description__c = 'test description';
        p.Status__c='Ongoing';
        insert p;
        return p;
    }
    
    public static Test_Case__c createTestCase(Project__c p, Test_Case__c tCase){
        tCase.Project__c = p.Id;
        tCase.Title__c = 'test Title';
        tCase.Description__c = 'test description';
        tCase.Preconditions__c = 'test preconditions';
        tCase.User_Story__c = 'test.com';
        insert tCase;
        return tCase;
    }
    
    public static Test_Case_Step__c createTestCaseStep(Test_Case_Step__c step, Test_Case__c tCase){
    	step.Test_Case__c = tCase.Id;
        step.Expected_Result__c = 'test result';
        step.Description__c = 'test description';
        step.Step_Position__c = 1;
        insert step;
        return step;
    }
}
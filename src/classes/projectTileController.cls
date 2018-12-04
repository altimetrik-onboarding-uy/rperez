public class projectTileController {
    @AuraEnabled
    public static List<Project__c> getProjects (){
        String[] fieldsToCheck = new String[] {
            'Id', 'Name', 'Status__c'
                };
                    
                    Map<String,Schema.SObjectField> fieldDescribeTokens = 
                    Schema.SObjectType.Project__c.fields.getMap();
        
        for(String field : fieldsToCheck) {
            if( ! fieldDescribeTokens.get(field).getDescribe().isAccessible()) {
                throw new System.NoAccessException();
            }
        }
        
        return[SELECT Id, Name, Status__c, Description__c
               FROM Project__c 
               WHERE Status__c = 'Ongoing'];
    }
    
    
    @AuraEnabled
    public static List<Test_Case__c> getCases(Project__c project)
    {
        return[SELECT Id,Name, Title__c, LastModifiedDate,Project__c , Description__c, Preconditions__c, User_Story__c 
               FROM Test_Case__c WHERE Project__c =: project.Id
               ORDER BY LastModifiedDate DESC];   
    }
    
    @AuraEnabled
    public static List<Test_Case__c> deleteTestCase(Test_Case__c testCase) {
        
        delete testCase;
        return [SELECT Id,Name, Title__c, LastModifiedDate,Project__c 
                FROM Test_Case__c WHERE Project__c =: testCase.Project__c 
                ORDER BY LastModifiedDate DESC];
    }
    @AuraEnabled
    public static List<Test_Case__c> createTestCase(Test_Case__c newTestCase, Project__c project){
       
        upsert newTestCase;
        return [SELECT Id,Name, Title__c, LastModifiedDate,Project__c , Description__c, Preconditions__c, User_Story__c 
                FROM Test_Case__c WHERE Project__c =: project.Id 
                ORDER BY LastModifiedDate DESC];
        
    }
}
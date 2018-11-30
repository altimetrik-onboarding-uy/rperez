public class testCaseStepsController {
    @AuraEnabled
    public static List<Test_Case_Step__c> getSteps(Id recordCase)
    {
        return[SELECT Id,Name, Test_Case__c, Step_Position__c, Description__c, Expected_Result__c FROM Test_Case_Step__c 
               WHERE Test_Case__c =: recordCase ORDER BY Step_Position__c ASC];
    }
    @AuraEnabled
    public static List<Test_Case_Step__c> updateStepsList(List<Test_Case_Step__c> spliceList)
    {	
        for(integer i = 0; i < spliceList.size(); i++){
            
            spliceList[i].Step_Position__c = i + 1;   
        }
        
        update spliceList;
        
        return spliceList;
    }
}
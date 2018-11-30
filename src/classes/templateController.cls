public class templateController {
    public Id owner {get;set;}
    
    public List<Project__c> getprojectList()
    {
        List<Project__c> projectList;
        
        projectList = [SELECT Name, Status__c,Cases_Amount__c FROM Project__c WHERE OwnerId =: owner AND Status__c = 'Ongoing'];
       
        return projectList;
    }

}
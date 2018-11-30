global class ongoingProjectsBatch implements Database.Batchable<sObject>{
    
    global Database.QueryLocator start(Database.BatchableContext bc) {
        return Database.getQueryLocator(
            'SELECT Id, Status__c, Cases_Amount__c, OwnerId FROM Project__c ' + 
            'WHERE Status__c = \'Ongoing\''
        );
    }
    global void execute(Database.BatchableContext bc, List<Project__c> scope){
        List<Id> ownerIds = new List<Id>();
        
        for(Project__c p : scope){
            if(!ownerIds.contains(p.OwnerId)){
                ownerIds.add(p.OwnerId);
            }
        }
        
        for(id owner : ownerIds){
            Messaging.SingleEmailMessage mail = new Messaging.SingleEmailMessage();
            mail.setTargetObjectId(owner); 
            mail.setSenderDisplayName('Salesforce Support'); 
            mail.setUseSignature(false); 
            mail.setBccSender(false); 
            mail.setSaveAsActivity(false); 
            EmailTemplate et=[Select id, Name from EmailTemplate where Name=:'ongoingProjects']; 
            mail.setTemplateId(et.id); 
            Messaging.SendEmailResult [] r = Messaging.sendEmail(new Messaging.SingleEmailMessage[] { mail });
            
        }
        
    }    
    global void finish(Database.BatchableContext bc){
        
    }    
    
}
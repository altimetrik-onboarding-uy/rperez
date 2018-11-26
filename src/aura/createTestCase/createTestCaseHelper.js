({
    doInit : function (component, event){
       var projectId = component.get("v.project.Id");  
        component.set("v.newTestCase.Project__c", projectId);  
    },
    
    hideEvent : function(component, event){
        var hideCreateTestCaseEvent = component.getEvent("hideCreateTestCaseEvent");
        hideCreateTestCaseEvent.fire();
    },
    
	createTestCase : function(component) {
		var project = component.get("v.project");
        var newTestCase= component.get("v.newTestCase");
        var createTestCaseEvent = component.getEvent("createTestCaseEvent");
        
        createTestCaseEvent.setParams({
            "project": project,
            "newTestCase": newTestCase })
        
        createTestCaseEvent.fire();
	}
})
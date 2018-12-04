({
    doInIt : function (component){
        var action = component.get("c.getProjects");
        
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.projects", response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        
        $A.enqueueAction(action);  
    },
    
    handlerProjectDetailsEvent : function (component, event){
        var projectToCheck = event.getParam("project");
        component.set("v.projectToCheck", projectToCheck);
        
        var action = component.get("c.getCases");
        action.setParams({
            "project": projectToCheck
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.testCases", response.getReturnValue());          
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);  
    },
    
    handlerDeleteTestCaseEvent : function (component, event){
        var testCaseToDelete = event.getParam("testCase");
        var action = component.get("c.deleteTestCase");
        
        action.setParams({
            
            testCase: testCaseToDelete
        });
        
        action.setCallback(this, function(response) {
            
            var state = response.getState();
            
            if (state === "SUCCESS") {                
                
                var testCases = component.get("v.testCases");
                
                component.set("v.testCases", response.getReturnValue());
                
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    title: "Success!",
                    message: "Test Case was successfully deleted.",
                    type: "success"
                });
                toastEvent.fire();  
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        
        $A.enqueueAction(action);    
    },  
    
    handlercreateTestCaseEvent : function (component, event){
        var newTestCase = event.getParam("newTestCase");
        var project = event.getParam("project");
        var action = component.get("c.createTestCase");
        
        action.setParams({
            
            "newTestCase": newTestCase,
            "project": project
        });
        action.setCallback(this, function(response) {   
            var state = response.getState();
            
            if (state === "SUCCESS") {       
                var testCases = component.get("v.testCases");
                var showCreateCase = component.get("v.showCreateCase");
                var showEditCase = component.get("v.showEditCase");
                if(showCreateCase > 0){
                    component.set("v.showCreateCase", 0);
                }
                if(showEditCase > 0)
                {
                    component.set("v.showEditCase", 0);
                }
                component.set("v.testCases", response.getReturnValue());
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    title: "Success!",
                    message: "Test Case was successfully saved.",
                    type: "success"
                });
                toastEvent.fire();
            }
            
            else{  
            }
            
        });
        
        $A.enqueueAction(action);
    },
    
    handlerShowCreateTestCaseEvent : function (component, event){
        var showCreateCase = component.get("v.showCreateCase");
        var showEditCase = component.get("v.showEditCase");
        component.set("v.showEditCase", 0);
        component.set("v.showCreateCase", 1);
    },
    
    handlerEditTestCaseEvent : function (component, event){
        var editTestCase = event.getParam("editTestCase");
        var showCreateCase = component.get("v.showCreateCase");
        var showEditCase = component.get("v.showEditCase");
        component.set("v.editTestCase", editTestCase);
        component.set("v.showEditCase", 1);
        component.set("v.showCreateCase", 0);
    },
    
    handlerHideCreateTestCaseEvent: function(component, event){
        var showEditCase = component.get("v.showEditCase");
        var showCreateCase = component.get("v.showCreateCase");
        component.set("v.showEditCase", 0);
        component.set("v.showCreateCase", 0);
    }
})
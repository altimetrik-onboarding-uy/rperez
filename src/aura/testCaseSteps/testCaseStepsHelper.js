({
    doInit : function(component, event) {
        
        var testCase = component.get("v.recordId")
        var action = component.get("c.getSteps");
        action.setParams({
            "recordCase" : testCase
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.steps", response.getReturnValue());
                console.log(response.getReturnValue());
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        
        $A.enqueueAction(action);
    },
    
    SwapEvent : function(component, event, spliceList){
        var action = component.get("c.updateStepsList");
        action.setParams({
            "spliceList" : spliceList
        });
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.steps', spliceList);
            }
            else {
                console.log("Failed with state: " + state);
            }
        });
        $A.enqueueAction(action);
    },
    
    newStep : function(component, event){
        var createStepEvent = $A.get("e.force:createRecord");
        var recordId = component.get('v.recordId');
        createStepEvent.setParams({
            "entityApiName": "Test_Case_Step__c",
            "defaultFieldValues": {
                'Test_Case__c' : recordId,
            }   
        });
        createStepEvent.fire();
    },
    
    editStepEvent : function(component, event){
        var step = event.getParam("step");
        var editRecordEvent = $A.get("e.force:editRecord");
        editRecordEvent.setParams({
            "recordId": step.Id
        });
        editRecordEvent.fire();
    }
    
})
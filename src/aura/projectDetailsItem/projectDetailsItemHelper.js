({
    fireDeleteEvent : function(component, helper) {
        var testCase = component.get("v.case");
        var deleteEvent = component.getEvent("deleteTestCaseEvent"); 
        
        deleteEvent.setParams({ 
            "testCase": testCase })
        
        deleteEvent.fire();
    },
    
    fireEditEvent : function (component, event){
        var editTestCase = component.get("v.case");
        var editEvent = component.getEvent("editTestCaseEvent"); 
        
        editEvent.setParams({ 
            "editTestCase": editTestCase })
        
        editEvent.fire();
    },
})
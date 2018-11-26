({
    doInit : function(component, event, helper) {
        helper.doInit(component, event);
    },
    
    fireHideCreateTestCaseEvent : function(component, event, helper){
        helper.hideEvent(component, event);
    },
    
    fireCreateTestCaseEvent : function(component, event, helper) {
        var validItem = component.find('caseField').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        if(validItem){
            // Create the new case
            helper.createTestCase(component);
        }
    }
})
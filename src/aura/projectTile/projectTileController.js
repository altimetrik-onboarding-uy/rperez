({
    doInit : function(component, event, helper) {
        helper.doInIt(component);
    },
    
    handlerProjectDetailsEvent : function(component, event, helper){
        helper.handlerProjectDetailsEvent(component,event);     
    },
    
    handlerDeleteTestCaseEvent : function (component, event,helper){
        helper.handlerDeleteTestCaseEvent(component,event);  
    },
    
    handlercreateTestCaseEvent : function (component, event, helper){
        helper.handlercreateTestCaseEvent(component,event);  
    },
    
    handlerShowCreateTestCaseEvent: function (component, event, helper){
        helper.handlerShowCreateTestCaseEvent(component,event);
    },
    
    handlerEditTestCaseEvent:function(component, event, helper){
        helper.handlerEditTestCaseEvent(component, event);
    },
    
    handlerHideCreateTestCaseEvent: function(component, event, helper){
        helper.handlerHideCreateTestCaseEvent(component, event);
    }
    
})
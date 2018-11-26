({
    fireDeleteEvent : function(component, event, helper) {
        
        var confirmThis = confirm("Do you really want to delete this test case");
        
        if(confirmThis == true){
            helper.fireDeleteEvent(component,event); 
        }
    },
    fireEditEvent : function(component, event, helper)
    {
        helper.fireEditEvent(component, event);
    }
})
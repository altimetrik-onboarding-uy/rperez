({
    
    onDragStart : function(component, event, helper) {
		helper.dragStart(component, event);
        
    },
    
    allowDrop: function(component, event, helper) {
        event.preventDefault();
    },
    
    onDrop: function(component, event, helper) {
        event.preventDefault();
        helper.drop(component, event);
        
    },
    
    fireEditStep: function(component, event, helper){
        helper.editStep(component, event);
        
    }
})
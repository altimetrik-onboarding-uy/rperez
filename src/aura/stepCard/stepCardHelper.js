({
	dragStart : function(component, event) {
		event.dataTransfer.dropEffect = "move";
        var step = component.get('v.step');
        event.dataTransfer.setData('text', JSON.stringify(step));
	},
    
    drop : function(component, event){
        var swapCardEvent = component.getEvent('swapCardEvent');
        swapCardEvent.setParams({
            'stepDrop' : component.get('v.step'),
            'stepDrag' : JSON.parse(event.dataTransfer.getData('text'))
        })
    	swapCardEvent.fire();
    },
    editStep : function(component, event){
        var editStepEvent = component.getEvent('editStepEvent');
        editStepEvent.setParams({
            'step' : component.get('v.step')
        })
        editStepEvent.fire();
    }
})
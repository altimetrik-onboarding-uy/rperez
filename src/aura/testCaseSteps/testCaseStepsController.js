({
    doInit : function(component, event, helper) {
        helper.doInit(component, event);
    },
    
    onSwapCardEvent : function(component, event, helper){
        
        var stepDrop = event.getParam("stepDrop");
        var stepDrag = event.getParam("stepDrag");     
        var stepsList = component.get("v.steps");
        if(stepDrag.Id != stepDrop.Id){
            
            var spliceList = stepsList.filter(function(el){
                return el.Id != stepDrag.Id
            });            
            var oldIndex= stepsList.findIndex(function(el){
                return el.Id == stepDrop.Id
            });            
            var newIndex = spliceList.findIndex(function(el){
                return el.Id == stepDrop.Id
            });            
            
            if (newIndex == 0){
                if(oldIndex > 0){
                    spliceList.splice(newIndex + 1,0,stepDrag);
                    helper.SwapEvent(component,event,spliceList); 
                }
                else{
                    spliceList.splice(newIndex,0,stepDrag);
                    helper.SwapEvent(component,event,spliceList); 
                }
            }
            if(newIndex > 0){ 
                if(oldIndex == newIndex){
                    spliceList.splice(newIndex,0,stepDrag);
                    helper.SwapEvent(component,event,spliceList); 
                }
                else{
                    spliceList.splice(newIndex  + 1,0,stepDrag);
                    helper.SwapEvent(component,event,spliceList); 
                }
            }
        } 
    },  
    
    fireNewStep : function(component, event, helper){
        
        helper.newStep(component, event);
        
    },
    
    onEditStepEvent : function(component, event, helper){
        helper.editStepEvent(component, event);
    }
})
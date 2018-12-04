({
	fireProjectEvent : function(component, event) {
		var project = component.get("v.project");
        var appEvent = $A.get("e.c:projectDetailsEvent");
        appEvent.setParams({
            "project" : project});
        appEvent.fire();
	}
})
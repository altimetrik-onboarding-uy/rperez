global class ongoingProjectsScheduler implements Schedulable {
    
    global void execute (SchedulableContext ctx) {
        
        ongoingProjectsBatch ongoing = new ongoingProjectsBatch();
        Database.executeBatch(ongoing);
    }
}
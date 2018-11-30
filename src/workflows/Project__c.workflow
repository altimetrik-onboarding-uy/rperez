<?xml version="1.0" encoding="UTF-8"?>
<Workflow xmlns="http://soap.sforce.com/2006/04/metadata">
    <alerts>
        <fullName>CancelledFinishedProjectAlert</fullName>
        <description>Sending email any time a project status is changed to cancelled or finished</description>
        <protected>false</protected>
        <recipients>
            <type>owner</type>
        </recipients>
        <senderType>CurrentUser</senderType>
        <template>unfiled$public/CancelledFinishedProjectEmail</template>
    </alerts>
</Workflow>

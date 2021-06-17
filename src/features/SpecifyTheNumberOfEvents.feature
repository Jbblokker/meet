Feature 3 Specify number of events.  

Scenario 1 When user hasn’t specified a number, 32 is the default number. 

Given the user hasn’t specified the number of events they are looking for	 

When the user searches for the events 

Then the default number of 32 will be applied to only show 32 events in that search 
 
Scenario 2 User can change the number of events they want to see. 	 

Given the user has chosen a specific number of events to view. 

When the user searches for events. 

Then the specific number declared by user will limit the total of events shown.  
# meet 
## Purpose
Meet app is is a (PWA) progressive web application. It will also use React using (TDD) test-driven development technique. 
This app will use a google Calendar API to fetch the upcoming events. 

## What will this app do? 
This is a web based application that will allow users to lookup and view upcoming events in their area. The user will be able to search for events
based on locations and number of events. The app will then show events based on the search requests. Users are authenticated using Google O-auth. 
The user will also be able to save thes app offlinge and show events that were cached.

## Scenarios for testing
### Feature: Filter events by city 

Scenario 1: When user hasn’t searched for a city, show upcoming events from all cities
Given user hasn’t searched for any city  
When the user opens the app
Then A list of all upcoming events comes up 

Scenario 2: User should see a list of suggestions when they search for a city
Given the user is in the main page
When the user starts searching for a specific city 
Then the user will see a list of suggested cites that match what the user has typed

Scenario 3: User can select a city from the suggested list
Given the user is typing “ example- Berlin, Germany” in the search box and a list of matching cities shows up
And the list of suggested cities is showing
When the user selects a city from the suggested list
Then it will take the user to another screen with the selected city along with a list of upcoming events 
And the user should receive a list of upcoming events in that city

### Feature:Show/Hide events details

Scenario 1: an event element is collapsed by default 
Given user has not tried to select the event element 
When the user selects the element with their mouse
Then the user should be able to see the details of the event 

Scenario 2: User can expand an event to see its details
Given the user has selected the event element available to click 
When the user does click for more details
Then the user will be given an expanded view of the details of said event  

Scenario 3: User can collapse an event to hide its details
Given the user is done looking at expanded information
When the user selects the collapse button
Then the user will no longer have the event’s details shown to view 

### Feature: Specify number of events

Scenario 1: When user has not specified a number 32 is the default number 
Given the user has not specified the number of events they are looking for	 
When the user searches for the events 
Then the default number of 32 will be applied to only show 32 events in that search 
 
Scenario 2: User can change the number of events they want to see	 
Given the user has chosen a specific number of events to view
When the user searches for events
Then the specific number declared by user will limit the total of events shown 

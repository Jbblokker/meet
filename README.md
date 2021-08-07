# meet Application 
This app was built in guidance with the CarrerFoundry Fullstack Web Development course.
The goal of this task was to creat a serverless, progressive web application (PWA).
To achieve this and build this app I used React using a test-driven Development (TDD) technique. 
This app was also created using the Google Calendar API to fetch the upcoming events in this meet app.

What Do we want to this app to do when it is done?

  -look up an event by a city.
  
  -give the user the option to choose how many events they want displayed. 
  
  -two charts
  
    -one displaying the type of events in pie chart form.
    
    -the second in scatterplot form showing us the total events for all available cities
    
  -events will be displayed with a button allowing for more information to be shown.
  
  -to be able to use this app when offline.

<h1> Features </h1>
<h2> Feature: Filter events by city </h2>

<h4>Scenario: When user hasn’t searched for a city, show upcoming events from all cities </h4>
Given user hasn’t searched for any city  
<br>
When the user opens the app
<br>
Then A list of all upcoming events comes up 

<h4>Scenario: User should see a list of suggestions when they search for a city</h4>
Given the user is in the main page
<br>
When the user starts searching for a specific city 
<br>
Then the user will see a list of suggested cites that match what the user has typed

<h4>Scenario: User can select a city from the suggested list</h4>
Given the user is typing “ example- Berlin, Germany” in the search box and a list of matching cities shows up
<br>
And the list of suggested cities is showing
<br>
When the user selects a city from the suggested list
<br>
Then it will take the user to another screen with the selected city along with a list of upcoming events
<br>
And the user should receive a list of upcoming events in that city

<h2>Feature:Show/Hide events details</h2>

<h4>Scenario: an event element is collapsed by default</h4>
Given user has not tried to select the event element 
<br>
When the user selects the element with their mouse
<br>
Then the user should be able to see the details of the event 

<h4>Scenario: User can expand an event to see its details</h4>
Given the user has selected the event element available to click 
<br>
When the user does click for more details
<br>
Then the user will be given an expanded view of the details of said event  

<h4>Scenario: User can collapse an event to hide its details</h4>
Given the user is done looking at expanded information
<br>
When the user selects the collapse button
<br>
Then the user will no longer have the event’s details shown to view 
  
<h2>Feature: Specify number of events</h2>

<h4>Scenario: When user has not specified a number 32 is the default number</h4>
Given the user has not specified the number of events they are looking for	
<br>
When the user searches for the events 
<br>
Then the default number of 32 will be applied to only show 32 events in that search 
 
<h4>Scenario: User can change the number of events they want to see</h4> 
Given the user has chosen a specific number of events to view
<br>
When the user searches for events
<br>
Then the specific number declared by user will limit the total of events shown 

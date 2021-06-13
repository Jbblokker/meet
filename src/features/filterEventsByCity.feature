Feature 1: Filter events by city 

Scenario 1 When user hasn’t searched for a city, show upcoming events from all cities. 

Given user hasn’t searched for any city  

When the user opens the app. 

Then A list of all upcoming events comes up. 

Scenario 2 User should see a list of suggestions when they search for a city.  

Given the user is in the main page. 

When the user starts searching for a specific city 

Then the user will see a list of suggested cites that match what the user has typed.  

Scenario 3: User can select a city from the suggested list. 

Given the user is typing “ example- Berlin, Germany” in the search box and a list of matching cities shows up. 

When the user selects a city form the suggested list.

Then it will take the user to another screen with the selected city along with a list of upcoming events . 
import { loadFeature, defineFeature } from 'jest-cucumber';

const feature = loadFeature('./src/features/showHideAnEventsDetails.feature');


defineFeature(feature, (test) => {

    test('an event element is collapsed by default', 
    ({ given,
       when,
       then 
    }) => {
        given('user has not tried to select the event element', () => {

        });

        when('the user selects the element with their mouse', () => {

        });

        then('the user should be able to see the details of the event', () => {

        });
    });

    test('User can expand an event to see its details', 
    ({ given, 
       when, 
       then 
    }) => {
        given('the user has selected the event element available to click', () => {

        });

        when('the user does click for more details', () => {

        });

        then('the user will be given an expanded view of the details of said event', () => {

        });
    });

    test('User can collapse an event to hide its details', 
    ({ given, 
       when, 
       then 
    }) => {
        given('the user is done looking at expanded information', () => {

        });

        when('the user selects the collapse button', () => {

        });

        then('the user will no longer have the event’s details shown to view', () => {

        });
    });
});

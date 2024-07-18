# Welcome to my implementation of the React Native Test Exercise
Guys, 
Here is a README for my repository. 

I added some notes about my decisions and problems during implementation. 
Of course, with normal (business) project, the flow should be wholly different - if I encounter any difficulty with API or anything to discus if this solution is good or bad, I should pause and reach out to API dev or Lead and so on. 

Since it is a test project, and I didn't have an opportunity to wait and discuss, I prepared small documentation what was wrong with the API and why I made some decisions. 

I am totally open to your thoughts and feedback! It will be a pleasure!

### Troubles with API

During implementation, I had some problems with the API, so some features are not working:

**1. Filtering**

 SpaceX API provided in the documentation is not working :)
https://studio.apollographql.com/public/spacex-l4uc6p/variant/main/explorer 
I am getting "Failed to fetch - Unable to reach server" 
This repo provided in the docs looks like a copy of the orginal one which is deprecated:
Link to the original one: https://github.com/SpaceXLand/api
Link to the copy: https://github.com/apollographql/spacex

So I had to use the copy of the copy :) 
https://studio.apollographql.com/public/SpaceX-pxxbxen/variant/current/explorer

But this API has some problems with the API filters:
When I am using the query for past launches, only **limit** and **offset** work. 
Other filters  **order**, **sort** and **find** always respond with the same data (no filtering). 

Please check it out, and circle back to me if you have any idea what is wrong, but I am pretty sure it is a difficulty with the API.

Besides that, filtering is implemented by API is not returning correct responses, so I wasn't able to test. 

**2. Total Count**

This API does not return total number of records. It returns null if I try to get the total amount. 
So looks like this is an additional concern with this copy of the copy of the API :). 
I could use the length of all records and get them in additional request only for checking amount, but it would be horrible for performance and antipattern. 
So I am only showing how many records are loaded.  

### Some additional files in the repo

I also removed all not required files from the repo. There were some types declarations, API Axios for logging, helpers and so on. So the repository contains only files/functions/variables in use.

### Redux

I didn't use Redux since it is a small app and Redux could be antipattern with this app. 

### What could I do better? What could be improved? 
 1. Items from the able are opening by “long press”. I think it could be better for UX if I use some gestures handlers.
 2. Because of API problems, I wasn't able to test every functionality.
 3. I haven't tested this app on many devices, so I should test it and check if everything is working correctly with different types of mobile phones. 
 4. I would like to add printing functionality.
 
**Waiting for your feedback!**



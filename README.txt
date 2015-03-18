Videos App Demo
This simple AngularJS web application gets data from a JSON file residing on a web server and displays it in a list.

Author : Danish Akhtar
Date     : March 18, 2015


This is one of the first times I indulged myself in developing web applications using AngularJS so if I have coded some silly mistakes, please excuse me for that!
Although I have learnt a great deal about AngularJS developing this simple example and feel I can probably complete something similar within a day now. And I actually enjoyed doing this little project and would love to get an opportunity to work on larger and more complex web applications using AngularJS to broaden my understanding and knowledge on it. 

There are a bunch of comments on my code explaining my coding style and what exactly I am trying to achieve. Although if something is not clear, please don’t hesitate to send me an email or contact me to ask me questions.


——————————————————————————————————————————————————————————
Requirements:

	⁃	Create a simple RESTful API data service that allows user to fetch the given data, your API will support pagination;
	⁃	Use the API service you created to complete the following:
	⁃	Crate a simple AngularJS driven web app that displays videos fetched from your API service
	⁃	The web app support lazy loading, each page will display 6 items at most in a table format, the table header has 4 tabs, id, rite, description and logo image respectively.
	⁃	Apply bootstrap to stylize your web layout
	⁃	The web app has a search function that allows her to filter videos by video title(from all videos)
	⁃	The web app allows user to sort videos by title, it happens when the suer clicks the title header

——————————————————————————————————————————————————————————
Installation:

Please install the necessary components I required to develop this web app:
	⁃	Node
	⁃	Bower
	⁃	Express 4.0
	⁃	Body-Parser
	⁃	Bourne

Angular Modules Used:
	⁃	angularJS
	⁃	angular-resource
	⁃	angular-route
	⁃	bootstrap (for stylizing purposes)

——————————————————————————————————————————————————————————
Brief Solution Overview & Code Structure:

To run:
	nodemon server.js on command prompt
	Go to http://localhost:3000/ on your browser

	⁃	server.js file includes the code to start up our localhost server. Also tells us that we are using Express 4.0 for our server-side processing and also provides the location to our REST API.
	And we are listening on port 3000.

	⁃	api.js is our simple REST API that uses all the required packages and handles all our http requests, and allows us to communicate with our data in the backend Bourne database.

The directory of my application is pretty self-explanatory. The public folder holds most the components that I coded including the src and views folders and the main.html file which is our entry point to the application.


videos/public/src
app.js:
we define our AngularJS app with all it’s dependencies. And also where we define the routes for our view

controllers.js:
controller file that handles our view 

factories.js
Connect the backend resource with a factory at the front end. This contains “Video” as our object that is called when retrieving data.

filters.js
Created a couple of filters needed to be used in our view for pagination and list labeling purposes. 
***Although, I was not able to use one of the filters (labelCase) and am still trying to debug the problem***


videos/public/views
list.html:
This is our view which contains a list of all the videos in the data.json file

nav.html
A simple navbar to navigate through our app. Although there is not much to navigate in our app yet!


——————————————————————————————————————————————————————————
Still to complete:

I was unable to currently implement lazy loading into our web app. But I think we can implement it using:
	⁃	ocLazyLoad
	⁃	we can include it in our application
	⁃	add it in our dependencies and enable a controller to lazy load the desired items 



Extra Possibilities:

Extra features I would have liked to implement if given more time:

	⁃	User Account Management system to track the sessions of the users 
	⁃	login page
	⁃	registration page
	⁃	Being able to Update and Delete videos by redirecting the user to a different page which holds a form that the user can edit, when clicking a video from the list.
	⁃	If these videos had been real movies, I was very interested in integrating IMDB’s exposed RESTful API and link up these movies with further details from IMDB and also have the possibility to play trailer videos.

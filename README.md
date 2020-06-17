# Workout Tracker
A server-based web application that allows the user to create a new exercise, update a current exercise, and monitor previous exercises.
![Home](/screenshots/ss1.png?raw=true)
The landing page features information about the most recent workout (date of workout, duration of workout, number of exercises performed, and total distance covered) and two buttons. The 'continue workout' button allows the user to add more data to the displayed workout. The 'new workout' button will create a new workout for the user.
![New Workout](/screenshots/ss2.png?raw=true)
If the 'new workout button is selected, the user will be directed to a screen to add a new exercise type from a dropdown. They have a choice between cardio and resistance training.
![New Cardio](/screenshots/ss3.png?raw=true)
If the user chooses cardio, input boxes will appear allowing the user to input the name of the cardio exercise, the distance traveled, and the duration of the exercise.
![New Resistance](/screenshots/ss5.png?raw=true)
If the user chooses resistance, input boxes will appear allowing the user to input the name of the resistance exercise, the amount of weight, the number of sets, the number of reps, and the duration of the exercise. If the 'add exercise' button is selected, the exercise will be added to the database of total exercises performed. If the 'complete' button is selected, the user will be redirected to the landing page where information about that exercise will be displayed in the 'last workout' div.
![Dashboard](/screenshots/ss4.png?raw=true)
In the upper left corner, there is a button titled 'dashboard.' If a user selects this button, they will be directed to a page containing all the information about all of the exercises they have logged. A line graph on the left shows the duration in minutes per day of the week the user exercises. A bar graph on the right displays the amount of weight (in lbs) lifted per day of the week. Pie charts at the bottom of the page show how much of each exercise the user has completed.

*The The application itself was pre-developed by Triology; I developed the server, models, and routes.

## Technologies
Database: MongoDB

Frameworks/Libraries: Mongoose, Express, Bootstrap

## Links

[Deployed Application](https://limitless-crag-08159.herokuapp.com/)
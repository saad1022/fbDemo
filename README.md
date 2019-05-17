# https://blog.jscrambler.com/integrating-firebase-with-react-native/


#Steps

* 1. DB Configuration :

- Create src/Config.js---add db config

<!-- The config object is where you fill in the details you get after creating a new project in Firebase and going to the section Add Firebase to your web app. Also in the Firebase console, from left sidebar, click on Database and then choose the first option: ((Realtime Database)). Then, go to “rules” and paste the following:

{ "rules": { ".read": true, ".write": true } } -->

* 2. Add Data into firebase :

- src/screens/AddItem.js 

<!-- The user can add a item to the list and it will get saved to Firebase data.

Adding a Firebase database instance from Config.js and db and then pushing any item that the user adds through addItem and handleSubmit().  -->


* 3. Fetching from Database

- src/screens/List.js 

<!-- To fetch data from the Firebase database, use the same reference to db in List.js. -->
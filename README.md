# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
Open [http://localhost:3000/movielist](http://localhost:3000/movielist) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

### `npm run build`
# Getting Started with Node JS App

## Available Scripts

In the project directory, you can run:

### `npm start` OR `node index.js`

Port is using 5000 in node js

#Changes for Database

1. Before run the node js project we have to create database `nodejsinterview` in the mysql
2. Go to nodejstest folder & open config folder
3. change db configuration as per your system. Update below details in the db.config file
   a. username
   b.password
   c.database

{
    host: "localhost",
    username: "root",
    password: "abhay@123",
    database: "nodejsinterview",
    dialect: "mysql",
    timezone: "+05:30",
    pool: {
        max: 6500,
        min: 0,
        acquire: 60000,
        idle:100000
    }
}


## Here 5 Apis are created
1. POST request to add new user

Method `POST`

URL: [http://localhost:5000/addUser](http://localhost:5000/addUser)

ROW Data: {
    "firstName": "Abhay",
    "lastName": "Rohan",
    "email": "anand.abhay192@gmail.com",
    "contact_no": 8448217704

}

2. GET request to fetch all users

Method `GET`

URL: [http://localhost:5000/getAllUserDetails](http://localhost:5000/getAllUserDetails)


3. PUT request to add update user details

Method `PUT`

URL: [http://localhost:5000/updateUser?id=1](http://localhost:5000/updateUser?id=1)

ROW Data: {
    "firstName": "Abhay",
    "lastName": "Rohan",
    "email": "anand.abhay192@gmail.com",
    "contact_no": 8448217704

}

4. Delete request to delete user

Method `DELETE`

URL: [http://localhost:5000/deleteUser/1](http://localhost:5000/deleteUser/1)


5. GET request to fetch all movie list

Method `GET`

URL: [http://localhost:5000/getMovieList](http://localhost:5000/getMovieList)



# checkpoint-backend-training **4h**

## Prerequisites (tools installed)

- NodeJS
- NPM
- MySQL
- Postman

### Getting started

The goal of this training is to implement a REST API backed by a SQL database. 
#### Database

You can use whatever SQL database you like (MySQL, SQLite, Postgresql, ...). 
Here is the schema of the database you need to create beforehand. 

![](https://camo.githubusercontent.com/3c19127eade9d784c0060d3e2a4e7838e653a50bd576b9c7a0c4a7b0a0d8373d/68747470733a2f2f692e696d6775722e636f6d2f5a33444b5643542e706e67)
![](https://camo.githubusercontent.com/947c593bda05ee3591b2a5c387865e3b94f45f2eef165ff62bea9311e46dbfa6/68747470733a2f2f692e696d6775722e636f6d2f504473536f45432e706e67)

#### Server

You can use any NodeJS backend framework (Express, NextJS, ...) to implement the HTTP server.

## An album application with Express

![Give Life Back to Music](https://laughingsquid.com/wp-content/uploads/2013/05/givelifebacktomusic5.gif)

Being a music lover, you want to create an application that allows you to manage albums.

The goal here is to create the backend with Node/Express.

### Your mission
 
Here are the user stories that you need to implement. 
As a user, I need to be able to : 
- create a new album
- retrieve the full list of albums
- retrieve one album by its ID
- update an album
- delete an album
- create a new track
- retrieve the full list of tracks
- retrieve the track list of one album
- retrieve one track by its ID
- update a track
- delete a track

You will have to respect the following rules on your routes:

- The body of the **HTTP requests** must be in the **JSON format**
- The body of the **HTTP responses** must be in the **JSON format**
- HTTP requests for **reading** must **return the element(s)** back into the HTTP response
- HTTP requests for **creation and modification** must **return the created/modified element** in the HTTP response
- HTTP requests for **deletion** must not **return any element** in the HTTP response

**Complies with REST principles, especially with regard to naming different routes and HTTP return codes.**

- [http-status-codes](https://restfulapi.net/http-status-codes/)

Be sure to group the routes using the Express router and test the API with Postman.


## Bonus

If you have some time left, try to :

- Clean and lint your code (Prettier + ESLint)
- Implement pagination, search and sorting on a route that returns a list.
- If you haven't done it, refactor your code with an "MVC-like" architecture.
- write a few tests with jest and supertest 
- Implement a simple user system with registration and login features.
- Implement roles and permissions, for example : unlogged  users shouldn't be able to access the album or tracks routes, and only users with the role 'artist' should be able to perform write operations on albums and tracks.
- Implement a front-end interface that works with your API

## It's done ! Congrats !

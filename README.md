# checkpoint-3-backend-training **4h**

## Prerequisites (tools installed)

- NodeJS
- NPM
- MySQL
- Postman

## An album application with Express

![Give Life Back to Music](https://laughingsquid.com/wp-content/uploads/2013/05/givelifebacktomusic5.gif)

Being a music lover, you want to create an application that allows you to manage albums.

The goal here is to create the backend with Node/Express.

Here are the user stories that tell you which routes you will have to implement on your backend, and which SQL queries will have to be executed:

- as a user, I want to be able to create a new album.
- as a user, I want to be able to see an album by entering its id in the url.
- as a user, I want to create and assign a song to an album.
- as a user, I want to list all the songs from an album.
- as a user, I want to be able to delete an album.
- as a user, I want to be able to modify an album.
- as a user, I want to delete a song.
- as a user, I want to edit a song from an album.

You will have to respect the following rules on your routes:

- The body of the **HTTP requests** must be in the **JSON format**
- The body of the **HTTP responses** must be in the **JSON format**
- HTTP requests for **reading** must **return the element(s)** back into the HTTP response
- HTTP requests for **creation and modification** must **return the created/modified element** in the HTTP response
- HTTP requests for **deletion** must not **return any element** in the HTTP response

**Complies with REST principles, especially with regard to naming different routes and HTTP return codes.**

- [http-status-codes](https://restfulapi.net/http-status-codes/)

Be sure to group the routes using the Express router and test the API with Postman.

You can find, down below, the database schema.

![MLD](https://i.imgur.com/PDsSoEC.png)

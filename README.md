# Book Search Engine

## ✏️ Description:

With this project, I took on the task of replacing and refactoring an existing codebase using a RESTful API, and replacing it with a GraphQL API. The goal was to ensure a smooth transition, without causing any mistakes to the currently functional website. This website features a search engine for books that uses the Google books API to find books, which can then be saved to the user's account when logged in.

## 📜 License:

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

This project is licensed under the MIT License. See LICENSE in the repo for more information.


## User Story

* AS AN avid reader
* I WANT to search for new books to read
* SO THAT I can keep a list of books to purchase

## Acceptance Criteria

* GIVEN a book search engine
* WHEN I load the search engine
* THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button
* WHEN I click on the Search for Books menu option
* THEN I am presented with an input field to search for books and a submit button
* WHEN I am not logged in and enter a search term in the input field and click the submit button
* THEN I am presented with several search results, each featuring a book’s title, author, description, * image, and a link to that book on the Google Books site
* WHEN I click on the Login/Signup menu option
* THEN a modal appears on the screen with a toggle between the option to log in or sign up
* WHEN the toggle is set to Signup
* THEN I am presented with three inputs for a username, an email address, and a password, and a signup button
* WHEN the toggle is set to Login
* THEN I am presented with two inputs for an email address and a password and login button
* WHEN I enter a valid email address and create a password and click on the signup button
* THEN my user account is created and I am logged in to the site
* WHEN I enter my account’s email address and password and click on the login button
* THEN I the modal closes and I am logged in to the site
* WHEN I am logged in to the site
* THEN the menu options change to Search for Books, an option to see my saved books, and Logout
* WHEN I am logged in and enter a search term in the input field and click the submit button
* THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account
* WHEN I click on the Save button on a book
* THEN that book’s information is saved to my account
* WHEN I click on the option to see my saved books
* THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account
* WHEN I click on the Remove button on a book
* THEN that book is deleted from my saved books list
* WHEN I click on the Logout button
* THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button 


## 🖥️ Technologies Used

* JavaScript
* React
* Mongoose
* GraphQL
* Apollo Server

## ⚙️ Installation

N/A

## 🌐 Deployed Application:

https://stormy-mesa-01941.herokuapp.com/


## 📸 Assets: 

The following pictures represent the website's functionality:

![Book Search Engine Home](./client/public/images/book-search-engine-home.png)
![Book Search Engine Saved](./client/public/images/book-search-engine-saved.png)

## 📖 Code Resources:
* GraphQL Documentation
* Apollo Documentation
* Class repo for file structure, assignment reference, etc.
* Figured out how input type works for typeDefs from this article: https://graphql.org/graphql-js/mutations-and-input-types/
* Tutoring session with Armando Osorio to help me solve issues with SavedBooks.js and SearchBooks.js
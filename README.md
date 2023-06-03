# Bookshelf

## Table of contents

- [General info](#general-info)
- [Minimum Viable Product ](#mvp)
- [Minimum Marketable Feature](#mmf)

## General info

Your library Catalog on a virtual bookshelf.  
Track your reading progress and maintain a wishlist of books you want to read.

### Tech Stack

- react: ^18.2.0,
- react-router-dom: ^6.11.2,
- styled-components: ^5.3.11,
- typescript: ^5.0.2,
- vite: ^4.3.2

### Setup

To run this project, install it locally using npm:

```
$ npm install
$ npm run dev
```

Create a .env file in the root of the project directory, and store the variable:

```
VITE_API_URI=https://api.nytimes.com/svc/books/v3
VITE_API_KEY=
```

## MVP

### Features

- Best sellers
- Book List
- Bookshelf

### Resources

- API Docs - https://developer.nytimes.com/docs/books-product/1/overview
- API Calls - https://reactrouter.com
- API Schema - https://quicktype.io
- CSS Reset - http://meyerweb.com/eric/tools/css/reset/v2.0
- CSS library - https://styled-components.com

### API

/lists/best-sellers/history.json : Get Best Sellers list history.  
/lists/current/{list}.json : Name of the Best Sellers List (e.g. hardcover-fiction).

### Paths

- /books
- /books/${list}

## MMF

- Book Overview (?)
- Book Rating (?)
- User Authentication (?)

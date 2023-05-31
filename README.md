# Bookshelf

## MVP

### Features

- Book List
- Book Overview
- Bookshelf
- Rate Books (?)
- Authentication (?)

### API

https://developer.nytimes.com/docs/books-product/1/overview  
API_URI = https://api.nytimes.com/svc/books/v3  
/lists/best-sellers/history.json : Get Best Sellers list history.
/lists/current/{list}.json : Name of the Best Sellers List (e.g. hardcover-fiction).

### Tech Stack

- API Calls -https://reactrouter.com
- API Schema - https://quicktype.io
- CSS Reset - http://meyerweb.com/eric/tools/css/reset/v2.0
- CSS library - https://styled-components.com

### Paths

- /books
- /books/${id}
- /bookshelf

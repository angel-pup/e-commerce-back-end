# E-Commerce-Back-End

## Table of Contents
- [Description](#description)
- [Installation](#Installation)
- [Usage](#usage)
- [Credits](#credits)
- [Code Example](#Code-Example)

## Description
Simple demonstration of RESTful API hosted on Heroku to grab information (integrated via JAWSDB) for a MySQL database.

## Installation
- API, no installation required.

## Usage
##### Utilize the following link with the paths below: https://vess-e-commerce-back-end.herokuapp.com

- path - request type: response: output

##### Products
- /api/products - GET: 200 OK: JSON of all products stored in DB
- /api/products/:id - GET: 200 OK: JSON of a single product given it's ID
- /api/products/:id - DELETE: 200 OK: 'Product deleted successfully' upon successful deletion
- /api/products - CREATE: 200 OK: responds with data given if successful (look at example request body below)
req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }

- /api/products/:id - PUT: : responds with data given if successful (look at example request body below)
req.body should look like this...
    {
        "product_name": "Updated Product Name",
        "price": 578.78,
        "stock": 72,
        "tagIds": [4, 5, 6, 7]
    }

##### Categories
- /api/categories
-- GET: 200 OK: JSON of all categories stored in DB
- /api/categories/:id - GET: 200 OK: JSON of a single category given it's ID
- /api/categories/:id - DELETE: 200 OK: 'Category deleted' upon successful deletion
- /api/categories - CREATE: 200 OK: responds with data given if successful (look at example request body below)
req.body should look like this...
    {
      category_name: "some category name"
    }

- /api/categories/:id - PUT: 200 OK: 'Category updated' upon success (look at example request body below)
req.body should look like this...
    {
	    "category_name": "some other category name"
    }

##### Tags
- /api/tags - GET: 200 OK: JSON of all tags stored in DB
- /api/tags/:id - GET: 200 OK: JSON of a single tag given it's ID
- /api/tags/:id - DELETE: 200 OK: 'tag deleted' upon successful deletion
- /api/tags - CREATE: 200 OK: responds with data given if successful (look at example request body below)
req.body should look like this...
    {
      tag_name: "some tag name"
    }

- /api/tags/:id - PUT: 200 OK: 'tag updated' upon success (look at example request body below)
req.body should look like this...
    {
	    "tag_name": "some other tag name"
    }

## Credits
Developed by:

Vess Stewart-
[GitHub](https://github.com/angel-pup)

## Features

- RESTful API
- GET (single/multiple), DELETE, CREATE, UPDATE any of Categories, Tags, or Products from a hosted Database.

[GitHub repository](https://github.com/angel-pup/e-commerce-back-end)

### Code-Example

[![Employee Tracker](https://img.youtube.com/vi/GCf3ncZK2-8/0.jpg)](https://www.youtube.com/watch?v=GCf3ncZK2-8)

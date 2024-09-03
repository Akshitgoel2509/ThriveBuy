# ThriveBuy

 an Ecommerce Website which is built using MERN stack with Bootstrap, React (Redux and React-Router) as frontend , MongoDb as database , Node & Express as backend. 



## Installation

Clone the repository:

```bash
git clone https://github.com/Akshitgoel2509/Food-Ordering-App.git
```

Install dependencies:

For Backend and for Frontend as well in there respective file.

```bash
cd src
npm install
```
Start the development server:

For Frontend

```bash
npm run dev
```

For Backend

```bash
nodemon run
```
    
## API Reference

#### Get all Products

```http
  https://dummyjson.com/products?limit=200
```

#### Get Category List

```http
https://dummyjson.com/products/category-list
```


#### Get Specific Category
```http

https://dummyjson.com/products/category/${category}
```
| Parameter | Type     | Description                                |
| :-------- | :------- | :------------------------------------------|
| `category`| `string` | **Required**. category of product to fetch |

## Tech Stack

**Client:** React, Redux, Bootstrap, Material UI

**Server:** Node, Express, Jwt and Bcrypt

**Database:** MongoDB


## Lessons Learned

What did you learn while building this project? What challenges did you face and how did you overcome them?

```bash
1. In user login, I have learned to use security features like JWT and BCrypt to protect user's password .

2. I have used redux to prevent from prop-drilling instead of ContextApi .

3. I have used many condition on the products as per customer's convenience like on the basis of:-
* Category 
* Prize
* Discount
* Rating

4. How to use search filter to search any particular product.

5. How to integrate (Backend Server + Database) with Frontend Server and use middlewares .


```
## Screenshots

![App Screenshot](https://i.imgur.com/sA9JNEn.jpeg)
![App Screenshot](https://i.imgur.com/Nxt06tw.png)
![App Screenshot](https://i.imgur.com/llxvE9p.png)
![App Screenshot](https://i.imgur.com/KdhdpPX.png)
![App Screenshot](https://i.imgur.com/x5zfJ0p.png)
![App Screenshot](https://i.imgur.com/TDRONZE.png)



## Authors

- [@Akshitgoel2509](https://www.github.com/@Akshitgoel2509)

## Feedback

If you have any feedback, please reach out to us at goelakshit253@gmail.com

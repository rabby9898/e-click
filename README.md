# E-click Backend

## Project Description

E-click Backend is the server-side implementation for an e-commerce platform. It provides various APIs for user authentication, product management, and cart functionality. This backend is built using Node.js and Express, and it connects to a MongoDB database for data storage.

## Features

### User Authentication

- **Sign Up**
  - Allows new users to create an account by providing necessary details such as username, email, and password. The password is securely hashed before being stored in the database.
- **Sign In**
  - Allows users to log in by verifying their credentials (email and password). Upon successful login, a JSON Web Token (JWT) is generated and sent to the client for authentication in future requests.
- **Logout**
  - Provides a way for users to securely log out by invalidating the JWT.
- **User Details Retrieval**
  - Fetches the details of the authenticated user, such as username and email. This endpoint requires a valid JWT.

### Admin Management

- **Retrieve All Users**
  - Allows administrators to retrieve a list of all registered users. This endpoint requires authentication and authorization.
- **Update User Details**
  - Allows administrators to update user information, such as changing user roles or other attributes. This endpoint requires authentication and authorization.

### Product Management

- **Upload New Products**
  - Enables administrators to add new products to the database. Details such as product name, description, price, category, and images can be uploaded. This endpoint requires authentication and authorization.
- **Get Product Details**
  - Fetches detailed information about a specific product based on its ID. This includes product name, description, price, category, and images.
- **Update Product Details**
  - Allows administrators to update existing product information. This endpoint requires authentication and authorization.
- **Retrieve Products by Category**
  - Fetches a list of products filtered by a specific category.
- **Search and Filter Products**
  - Allows users to search for products by name and apply various filters such as price range, category, and other attributes.

### Shopping Cart

- **Add Products to Cart**
  - Allows authenticated users to add products to their shopping cart. Each product added to the cart is associated with the user’s account.
- **View Cart Items**
  - Retrieves the list of products currently in the user’s shopping cart. This includes details such as product name, quantity, and total price.
- **Update Product Quantity in Cart**
  - Allows users to update the quantity of a specific product in their cart.
- **Delete Products from Cart**
  - Enables users to remove products from their cart.

## Tech Stack

- **Node.js**: ^16.x
- **Express**: ^4.19.2
- **Mongoose**: ^8.3.4
- **JWT (jsonwebtoken)**: ^9.0.2
- **Bcrypt**: ^5.1.1
- **Cookie-parser**: ^1.4.6
- **CORS**: ^2.8.5
- **Dotenv**: ^16.4.5

## Installation

To set up the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/rabby9898/eclick-backend.git
   ```
2. Navigate to the project directory:
   ```sh
   cd e-click-backend
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
4. Create a `.env` file in the root directory and add your environment variables:
   ```
   MONGO_URI=your_mongodb_uri
   JWT_SECRET=your_jwt_secret
   ```
5. Start the development server:
   ```sh
   npm run dev
   ```

## Project Structure

- **/controllers**: Contains the controller functions for various routes.
- **/middleware**: Contains middleware functions for authentication and other purposes.
- **/models**: Contains Mongoose models for User and Product.
- **/routes**: Contains the route definitions.
- **index.js**: Entry point of the application.

Feel free to customize this README file to better fit your project's specifics. Happy coding!

# ReactJS Context API - Task 29

## Task 29 - ReactJS Context API

This project extends the Shoe Store application from the previous task by implementing a shopping cart using the React Context API and adding a payment functionality.

## Problem Statement

Implement a payment functionality in an online shoe store using the Context API in React.

When the user clicks the "Proceed to Payment" button in the shopping cart, they are redirected to a payment page.

## Features

- Shoe product listing
- Add shoes to shopping cart
- Increase and decrease product quantity
- Automatic cart total calculation
- React Context API for cart state management
- Proceed to Payment button
- Payment page
- Shopping cart items displayed on payment page
- Return to Shopping option
- Credit card payment form
- Payment success message
- Responsive user interface

## React Context API

The application uses React Context API to manage the shopping cart state.

The following cart operations are handled through Context API:

- Add item to cart
- Increase quantity
- Decrease quantity
- Calculate total price

## Payment Page

The payment page displays:

- Cart items
- Product quantities
- Individual item prices
- Total amount
- Return to Shopping option
- Credit card payment form

## Technologies Used

- React.js
- JavaScript
- HTML5
- CSS3
- React Router DOM
- React Context API
- Vite

## Project Structure

```text
src/
├── components/
├── context/
│   └── CartContext.jsx
├── pages/
│   └── Payment.jsx
├── assets/
├── App.jsx
├── App.css
├── index.css
└── main.jsx
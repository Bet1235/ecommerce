# E-Commerce Landing Page

A responsive e-commerce landing page built as part of the Front-End Standardisation Test.

The project implements the provided Figma design using React, TypeScript, Vanilla CSS, Redux Toolkit, and Redux Toolkit Query. Product data is retrieved from the DummyJSON API, while Redux Toolkit manages shopping cart state.

## Live Demo

**Netlify:** Add your deployed Netlify URL here

## GitHub Repository

https://github.com/Bet1235/ecommerce

---

## Project Overview

This project focuses on implementing a responsive e-commerce landing page based on the provided Figma design.

The application includes:

- Responsive navigation/header
- Promotional header bar
- Hero section
- Bestseller product section
- Product cards
- Services section
- Featured posts section
- Testimonials section
- Call-to-action section
- Footer
- Shopping cart functionality

The implementation was developed with a mobile-first approach and adapted for mobile, tablet, and desktop screen sizes.

---

## Features

### Landing Page

The landing page is divided into reusable sections:

- Header
- Hero
- Bestseller products
- Services
- Featured posts
- Testimonials
- Call-to-action
- Footer

### Product Integration

Products are retrieved from the DummyJSON Products API using Redux Toolkit Query.

The application handles:

- Product fetching
- Loading states
- API errors
- Product rendering
- API response caching

### Shopping Cart

The cart is managed using Redux Toolkit.

Users can:

- Add products to the cart
- Increase product quantity
- Decrease product quantity
- Remove products
- Clear the cart
- View subtotal
- View shipping cost
- View total price
- View an empty-cart state

### Responsive Design

The interface is designed using a mobile-first approach and adapts to:

- Mobile
- Tablet
- Desktop

CSS Grid and Flexbox are used to create responsive layouts.

---

## Technology Stack

### Frontend

- React
- Vite
- TypeScript
- Vanilla CSS

### State Management

- Redux Toolkit

### API Integration

- Redux Toolkit Query
- DummyJSON Products API

### Deployment

- Netlify

---

## Project Structure

```text
src/
│
├── app/
│   ├── hooks.ts
│   └── store.ts
│
├── assets/
│   └── hero/
│
├── components/
│   ├── Button/
│   ├── CartItems/
│   ├── EmptyState/
│   ├── Footer/
│   ├── Header/
│   ├── Home/
│   │   ├── Hero/
│   │   ├── Bestseller/
│   │   ├── Services/
│   │   ├── FeaturedPosts/
│   │   ├── Testimonials/
│   │   └── HomeCTA/
│   ├── ProductCard/
│   └── QuantityStepper/
│
├── features/
│   ├── cart/
│   │   └── cartSlice.ts
│   │
│   └── products/
│       └── productsApi.ts
│
├── pages/
│   ├── Home/
│   │   ├── Home.tsx
│   │   └── Home.css
│   │
│   └── Cart/
│       ├── Cart.tsx
│       └── Cart.css
│
├── types/
│   ├── cart.ts
│   └── product.ts
│
├── utils/
│   └── price.ts
│
├── App.tsx
├── index.css
└── main.tsx
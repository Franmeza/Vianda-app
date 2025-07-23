# Vianda App

A full-stack web application for ordering, managing, and delivering prepared meals ("viandas").

## Key Features

### 1. User Authentication & Registration
- Login and registration pages
- Google login support
- User management for registration and updates

### 2. Meal/Menu Management
- Admin pages for managing meals (viandas): create, update, activate/deactivate
- Menu management for daily/weekly meal offerings
- Cards and components for displaying meal details and recommendations

### 3. Order Management
- Users can place orders, view order details, and see order history
- Admin and kitchen views for managing and tracking orders
- PDF export for orders (for kitchen or delivery use)

### 4. Admin Dashboard
- Manage users, meals, and orders
- Filters, search, and pagination for efficient management
- User and meal status toggling

### 5. Checkout & Payments
- Checkout flow for users to complete purchases
- Payment integration (with webhook for payment notifications)

### 6. Delivery/Logistics
- Pages for delivery personnel ("repartidor") and couriers ("mensajero")
- Components for tracking and updating delivery status

### 7. User Account Management
- "Mi cuenta" (my account) section for users to view and update their data and orders

### 8. Catalog & Marketing
- Catalog pages for browsing meals
- About, team, and landing page components
- Call-to-action and info sections for marketing

### 9. Email Notifications
- Email templates and routes for sending notifications (order confirmations, etc.)

### 10. Miscellaneous
- Context providers for authentication and cart management
- Utility functions for formatting currency and orders
- Responsive design and Tailwind CSS for styling

## Feature Summary Table

| Area            | Features                                                                                 |
|-----------------|------------------------------------------------------------------------------------------|
| User            | Register, login, view/update account, browse catalog, place orders                      |
| Admin           | Manage users, meals, orders, menus; export orders; dashboard features                   |
| Kitchen/Delivery| Special views for kitchen staff and delivery personnel                                   |
| Payments        | Checkout, payment processing, webhooks                                                  |
| Notifications   | Email notifications                                                                     |
| UI/UX           | Responsive design, search, filters, pagination, marketing components                    |
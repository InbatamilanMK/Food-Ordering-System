# 🍔 NammaBite — Next-Gen Online Food Ordering & Delivery Ecosystem

A production-grade, multi-role **Online Food Ordering Platform** designed as a showcase project for software engineering portfolios, technical interviews, and resume demonstrations.

Hosted live on GitHub Pages with **zero external backend dependencies**, featuring an in-browser relational data store (`localStorage`), live animated route tracking map simulator, mock payment gateway, Restaurant Partner Portal with full menu CRUD, and a Super Admin operations control desk.

---

## 🌟 Key Highlights & Portfolio Capabilities

| Module | Core Features Implemented |
| :--- | :--- |
| **🛍️ Customer Module** | Restaurant discovery, category filters, pure veg toggle, 4.2+ ratings filter, real-time live search, dish customization, floating cart, coupon codes engine (`FIRST50`, `TASTY20`, `FREESHIP`), multi-channel payment gateway (UPI, QR, Cards, COD), live animated route map tracking, order cancellation, and 5-star customer reviews. |
| **🍳 Restaurant Partner Module** | Multi-kitchen switcher, live incoming order dispatch pipeline (Accept ➔ Start Cooking ➔ Handover to Rider ➔ Mark Delivered), full Menu CRUD (Add Dish with image presets, inline price editing, stock availability toggle, delete item), and dishes sales analytics. |
| **🛡️ Super Admin Control Center** | Live platform GMV counter, dynamic commission adjustment slider (5% to 30%) with instant revenue calculation, restaurant partner activation/suspension toggles, registered user records, and customer dispute resolution & refund desk. |
| **⚡ Live Simulation Suite** | Fast-forward order stages button, interactive moving delivery bike SVG route, sound synthesizer chimes (Web Audio API), and printable GST tax invoice generator. |

---

## 🚀 Live Hosting on GitHub Pages (Step-by-Step Guide)

You can host this entire system live on GitHub in **under 2 minutes** completely free:

### Step 1: Initialize Git and Commit Files
Open your terminal in the project directory:
```bash
cd food-ordering-system
git init
git add .
git commit -m "Initial commit: Complete Online Food Ordering Platform"
```

### Step 2: Create a New GitHub Repository
1. Go to [GitHub New Repository](https://github.com/new).
2. Enter repository name: `online-food-ordering-system` (or `zestybite`).
3. Set visibility to **Public**.
4. Leave "Add a README" **unchecked** (we already have one).
5. Click **Create repository**.

### Step 3: Push Code to GitHub
Copy and paste the commands shown on GitHub:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_GITHUB_USERNAME>/<YOUR_REPOSITORY_NAME>.git
git push -u origin main
```

### Step 4: Turn ON GitHub Pages
1. Go to your repository on GitHub.
2. Click **Settings** (top tab) ➔ Click **Pages** (on the left sidebar).
3. Under **Branch**, select `main` from the dropdown, leave folder as `/(root)`, and click **Save**.
4. Wait 30 to 60 seconds. Refresh the page.
5. GitHub will provide your live URL:
   ```
   https://<YOUR_GITHUB_USERNAME>.github.io/<YOUR_REPOSITORY_NAME>/
   ```
6. Paste this link directly into your LinkedIn profile, resume, and GitHub bio!

---

## 🏗️ System Architecture & Data Flow

```text
┌────────────────────────────────────────────────────────────────────────┐
│                        ROLE SWITCHER BAR                               │
│      [ 🛍️ Customer App ]   [ 🍳 Restaurant Portal ]   [ 🛡️ Super Admin ] │
└────────────────────────────────────┬───────────────────────────────────┘
                                     │
         ┌───────────────────────────┼───────────────────────────┐
         ▼                           ▼                           ▼
┌──────────────────┐       ┌──────────────────┐       ┌──────────────────┐
│  CUSTOMER VIEW   │       │ RESTAURANT VIEW  │       │    ADMIN VIEW    │
│ • Browse Kitchens│       │ • Live Orders    │       │ • Platform GMV   │
│ • Menu Selection │       │ • Accept/Cooking │       │ • Commission %   │
│ • Cart & Coupons │       │ • Menu CRUD      │       │ • Suspend/Active │
│ • Payment Modal  │       │ • Stock Toggle   │       │ • Refund Tickets │
│ • Live Route Map │       │ • Sales Metrics  │       │ • Users Directory│
└────────┬─────────┘       └────────┬─────────┘       └────────┬─────────┘
         │                          │                          │
         └──────────────────────────┼──────────────────────────┘
                                    │
                                    ▼
       ┌────────────────────────────────────────────────────────┐
       │         REACTIVE STATE STORE & LOCALSTORAGE            │
       │  • Restaurants & Menus Catalog   • Active Orders       │
       │  • Coupon Engine                 • Users & Auth        │
       │  • Platform Commissions          • Dispute Tickets     │
       └────────────────────────────────────────────────────────┘
```

---

## 📊 Relational Database Schema (SQL DDL)

For technical interviews and backend implementation in MySQL or PostgreSQL:

```sql
-- 1. Users Table
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    phone VARCHAR(20) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    default_address TEXT,
    role VARCHAR(20) DEFAULT 'CUSTOMER', -- 'CUSTOMER', 'PARTNER', 'ADMIN'
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Restaurants Table
CREATE TABLE restaurants (
    id SERIAL PRIMARY KEY,
    owner_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    location VARCHAR(255) NOT NULL,
    rating DECIMAL(2,1) DEFAULT 4.5,
    cost_for_two INT DEFAULT 350,
    delivery_time_mins INT DEFAULT 30,
    is_veg_only BOOLEAN DEFAULT FALSE,
    is_active BOOLEAN DEFAULT TRUE,
    commission_tier VARCHAR(50) DEFAULT 'Standard 15%',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 3. Menu Items Table
CREATE TABLE menu_items (
    id SERIAL PRIMARY KEY,
    restaurant_id INT REFERENCES restaurants(id) ON DELETE CASCADE,
    name VARCHAR(150) NOT NULL,
    category VARCHAR(50) NOT NULL, -- 'Biryani', 'Starters', 'Pizzas', etc.
    price DECIMAL(10,2) NOT NULL,
    is_veg BOOLEAN DEFAULT FALSE,
    is_bestseller BOOLEAN DEFAULT FALSE,
    in_stock BOOLEAN DEFAULT TRUE,
    image_url TEXT,
    description TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 4. Orders Table
CREATE TABLE orders (
    id SERIAL PRIMARY KEY,
    order_code VARCHAR(20) UNIQUE NOT NULL, -- e.g. '#ZB-84920'
    customer_id INT REFERENCES users(id),
    restaurant_id INT REFERENCES restaurants(id),
    item_subtotal DECIMAL(10,2) NOT NULL,
    delivery_fee DECIMAL(10,2) DEFAULT 35.00,
    platform_fee DECIMAL(10,2) DEFAULT 5.00,
    gst_amount DECIMAL(10,2) NOT NULL,
    discount_amount DECIMAL(10,2) DEFAULT 0.00,
    rider_tip DECIMAL(10,2) DEFAULT 0.00,
    grand_total DECIMAL(10,2) NOT NULL,
    payment_method VARCHAR(50) NOT NULL, -- 'UPI', 'CARD', 'COD'
    payment_status VARCHAR(30) DEFAULT 'SUCCESS',
    order_status VARCHAR(40) DEFAULT 'PLACED', -- 'PLACED', 'PREPARING', 'RIDER_ASSIGNED', 'OUT_FOR_DELIVERY', 'DELIVERED', 'CANCELLED'
    delivery_address TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 5. Order Line Items Table
CREATE TABLE order_items (
    id SERIAL PRIMARY KEY,
    order_id INT REFERENCES orders(id) ON DELETE CASCADE,
    menu_item_id INT REFERENCES menu_items(id),
    dish_name VARCHAR(150) NOT NULL,
    unit_price DECIMAL(10,2) NOT NULL,
    quantity INT NOT NULL,
    total_price DECIMAL(10,2) NOT NULL
);

-- 6. Coupons / Offers Table
CREATE TABLE coupons (
    code VARCHAR(30) PRIMARY KEY,
    discount_type VARCHAR(20) NOT NULL, -- 'PERCENT', 'FLAT', 'FREE_DELIVERY'
    discount_value DECIMAL(10,2) NOT NULL,
    max_discount DECIMAL(10,2),
    min_order_amount DECIMAL(10,2) NOT NULL,
    is_active BOOLEAN DEFAULT TRUE
);
```

---

## 🔌 RESTful API Endpoints (Backend Architecture)

If migrating to Node.js / Express or Java Spring Boot:

| HTTP Verb | Endpoint | Description |
| :--- | :--- | :--- |
| `POST` | `/api/v1/auth/register` | Register new customer or restaurant partner |
| `POST` | `/api/v1/auth/login` | Login with JWT token issuance |
| `POST` | `/api/v1/auth/send-otp` | Trigger SMS OTP for phone verification |
| `GET` | `/api/v1/restaurants` | Fetch restaurants with filtering & sorting |
| `GET` | `/api/v1/restaurants/:id/menu` | Fetch categorized dishes for restaurant |
| `POST` | `/api/v1/cart/apply-coupon` | Validate promo code against cart subtotal |
| `POST` | `/api/v1/orders/checkout` | Process payment & create new order |
| `GET` | `/api/v1/orders/:id/track` | Stream live order coordinates & status |
| `POST` | `/api/v1/partner/menu/dish` | Create new dish item (Restaurant CRUD) |
| `PUT` | `/api/v1/partner/menu/dish/:id` | Update dish price or toggle availability |
| `DELETE`| `/api/v1/partner/menu/dish/:id` | Soft delete dish from restaurant menu |
| `GET` | `/api/v1/admin/analytics` | Retrieve GMV, commission revenues, and metrics |
| `POST` | `/api/v1/admin/complaints/:id/refund` | Trigger refund disbursement |

---

## 💡 Interview Q&A Guide (Tanglish + English)

### Q1: "Indha project la state management epdi handle panreenga?"
> *"I utilized a reactive centralized state architecture synced with browser `localStorage`. When a customer modifies items or places an order, the state is persisted and shared instantaneously with the Restaurant Partner view and Super Admin dashboard. This allows seamless role switching without requiring page reload."*

### Q2: "Live Order Tracking epdi simulate panreenga?"
> *"Tracking uses a coordinated 5-stage state machine (Placed ➔ Cooking ➔ Rider Assigned ➔ Out for Delivery ➔ Delivered). In the UI, an SVG vector map computes waypoint offsets along a delivery path, dynamically translating the delivery motorcycle marker with a pulse radar ring and live ETA recalculation."*

### Q3: "Real-world payment gateway integration epdi irukkum?"
> *"In production, the frontend collects the order token and invokes Razorpay Checkout / Stripe Elements SDK. The payment gateway verifies credentials, charges the customer, and triggers a signed server-to-server Webhook (`/api/v1/payments/webhook`) with HMAC SHA-256 verification before updating the database status to `PAID`."*

---

## 📁 File Structure

```text
food-ordering-system/
├── index.html        # Semantic HTML5 single-page application structure
├── style.css         # Modern responsive CSS design system with custom map styling
├── app.js            # Reactive state management, local database, and audio chimes
└── README.md         # Architecture, SQL DDL, API documentation, and hosting guide
```

---

## 📜 License & Credits

Distributed under the **MIT License**. Created as an open-source technical showcase for developer portfolios.

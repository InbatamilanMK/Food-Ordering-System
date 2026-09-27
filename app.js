/**
 * NammaBite - Next-Gen Online Food Ordering & Delivery Platform
 * Complete Client-Side Architectural Implementation for GitHub Portfolio
 */

// =============================================================================
// 1. DEFAULT SEED DATABASE
// =============================================================================

const INITIAL_RESTAURANTS = [
  {
    id: "rest-1",
    name: "Thalappakatti Royal Biryani",
    slug: "thalappakatti-biryani",
    cuisines: ["Biryani", "South Indian", "Chettinad", "Mughlai"],
    rating: 4.6,
    reviewCount: "1.4k+",
    deliveryTime: "25-30 mins",
    deliveryMinutes: 28,
    costForTwo: 380,
    location: "Anna Nagar, Chennai",
    bannerImage: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=800&q=80",
    offer: "50% OFF up to ₹100",
    isVegOnly: false,
    isActive: true,
    commissionTier: "Standard (15%)",
    dishes: [
      {
        id: "d-101",
        name: "Dindigul Thalappakatti Mutton Biryani",
        category: "Biryani",
        price: 360,
        isVeg: false,
        isBestseller: true,
        rating: 4.8,
        description: "Signature seeraga samba rice cooked with tender farm-fresh mutton, rich desi ghee, and 18 secret hand-ground spices.",
        image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-102",
        name: "Special Chicken Biryani Pot",
        category: "Biryani",
        price: 270,
        isVeg: false,
        isBestseller: true,
        rating: 4.6,
        description: "Fragrant chicken dum biryani served with spicy dalcha gravy and cool onion raita.",
        image: "https://images.unsplash.com/photo-1633945274405-b6c8069047b0?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-103",
        name: "Chettinad Pepper Chicken Dry",
        category: "Starters",
        price: 230,
        isVeg: false,
        isBestseller: false,
        rating: 4.5,
        description: "Juicy chicken morsels tossed in cracked black pepper, curry leaves, and roasted shallots.",
        image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-104",
        name: "Paneer Tikka Biryani (Pure Veg)",
        category: "Biryani",
        price: 240,
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        description: "Tandoori grilled cottage cheese cubes layered with spiced basmati rice and saffron.",
        image: "https://images.unsplash.com/photo-1645177628172-a94c1f96e6db?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-105",
        name: "Malabar Parotta with Salna (2 Pcs)",
        category: "Breads",
        price: 80,
        isVeg: true,
        isBestseller: false,
        rating: 4.7,
        description: "Flaky, multi-layered golden parottas served with homestyle aromatic street salna.",
        image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-106",
        name: "Elaneer Payasam (Tender Coconut)",
        category: "Desserts",
        price: 95,
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        description: "Chilled South Indian delicacy made with pure tender coconut pulp, coconut milk, and cardamom.",
        image: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=400&q=80",
        inStock: true
      }
    ]
  },
  {
    id: "rest-2",
    name: "Cheesy Oven Woodfired Pizzas",
    slug: "cheesy-oven-pizzas",
    cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
    rating: 4.5,
    reviewCount: "980+",
    deliveryTime: "20-25 mins",
    deliveryMinutes: 22,
    costForTwo: 480,
    location: "Indiranagar, Bangalore",
    bannerImage: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80",
    offer: "Flat 20% OFF with TASTY20",
    isVegOnly: false,
    isActive: true,
    commissionTier: "Premium (20%)",
    dishes: [
      {
        id: "d-201",
        name: "Classic Margherita Basilico",
        category: "Pizzas",
        price: 290,
        isVeg: true,
        isBestseller: true,
        rating: 4.7,
        description: "San Marzano tomato base, creamy fior di latte mozzarella, fresh sweet basil, and extra virgin olive oil.",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-202",
        name: "Peri Peri Smoked Chicken Pizza",
        category: "Pizzas",
        price: 380,
        isVeg: false,
        isBestseller: true,
        rating: 4.8,
        description: "Charred woodfired dough topped with spiced grilled chicken chunks, red paprika, and peri-peri drizzle.",
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-203",
        name: "Artisanal Stuffed Garlic Bread",
        category: "Starters",
        price: 160,
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        description: "Freshly baked garlic baguette stuffed with molten cheese, sweet corn, and jalapenos.",
        image: "https://images.unsplash.com/photo-1619895092538-128341789043?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-204",
        name: "Creamy Truffle Penne Alfredo",
        category: "Pastas",
        price: 320,
        isVeg: true,
        isBestseller: false,
        rating: 4.4,
        description: "Al dente penne in a velvety parmesan cream sauce infused with white truffle oil and wild mushrooms.",
        image: "https://images.unsplash.com/photo-1621996346565-e3d5d6281691?auto=format&fit=crop&w=400&q=80",
        inStock: true
      }
    ]
  },
  {
    id: "rest-3",
    name: "Urban Burger & Shake Co.",
    slug: "urban-burger-shake",
    cuisines: ["Burgers", "American", "Fast Food", "Beverages"],
    rating: 4.4,
    reviewCount: "820+",
    deliveryTime: "20-30 mins",
    deliveryMinutes: 25,
    costForTwo: 320,
    location: "T. Nagar, Chennai",
    bannerImage: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
    offer: "Free Delivery with FREESHIP",
    isVegOnly: false,
    isActive: true,
    commissionTier: "Standard (15%)",
    dishes: [
      {
        id: "d-301",
        name: "Crispy Peri-Peri Chicken Burger",
        category: "Burgers",
        price: 195,
        isVeg: false,
        isBestseller: true,
        rating: 4.7,
        description: "Crunchy double-fried chicken breast, spicy house mayo, crisp lettuce on toasted brioche bun.",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-302",
        name: "Truffle Cheese Veggie Smash",
        category: "Burgers",
        price: 175,
        isVeg: true,
        isBestseller: false,
        rating: 4.3,
        description: "Handcrafted potato & quinoa patty, melted cheddar, caramelized onions, and garlic aioli.",
        image: "https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-303",
        name: "Peri-Peri Seasoned Fries",
        category: "Starters",
        price: 110,
        isVeg: true,
        isBestseller: true,
        rating: 4.6,
        description: "Golden crispy skin-on potato fries tossed in piquant African peri-peri seasoning.",
        image: "https://images.unsplash.com/photo-1576107232684-1279f3908594?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-304",
        name: "Thick Belgian Chocolate Shake",
        category: "Beverages",
        price: 150,
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        description: "Rich blended chocolate ice cream shake topped with chocolate shavings and whipped cream.",
        image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=400&q=80",
        inStock: true
      }
    ]
  },
  {
    id: "rest-4",
    name: "Sangeetha Veg Pure South",
    slug: "sangeetha-veg",
    cuisines: ["South Indian", "Pure Veg", "Thali", "Breakfast"],
    rating: 4.7,
    reviewCount: "3.1k+",
    deliveryTime: "15-20 mins",
    deliveryMinutes: 18,
    costForTwo: 240,
    location: "Anna Nagar, Chennai",
    bannerImage: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=800&q=80",
    offer: "Flat ₹50 OFF with FIRST50",
    isVegOnly: true,
    isActive: true,
    commissionTier: "Standard (15%)",
    dishes: [
      {
        id: "d-401",
        name: "Special Ghee Roast Dosa",
        category: "South Indian",
        price: 110,
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        description: "Crispy golden crepe roasted in pure cow ghee, served with 3 signature chutneys and sambar.",
        image: "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-402",
        name: "Mini South Indian Tiffin Combo",
        category: "South Indian",
        price: 145,
        isVeg: true,
        isBestseller: true,
        rating: 4.8,
        description: "1 Ghee Idli, 1 Crispy Medu Vada, 1 Mini Masala Dosa, and Kesari sweet.",
        image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-403",
        name: "Authentic Madras Degree Filter Coffee",
        category: "Beverages",
        price: 45,
        isVeg: true,
        isBestseller: true,
        rating: 4.9,
        description: "Freshly brewed chicory coffee decoction frothed with boiling farm milk in brass davarah.",
        image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&w=400&q=80",
        inStock: true
      },
      {
        id: "d-404",
        name: "Royal South Indian Meals / Thali",
        category: "South Indian",
        price: 180,
        isVeg: true,
        isBestseller: false,
        rating: 4.7,
        description: "Steamed Ponni rice, Sambar, Rasam, Kara Kuzhambu, Kootu, Poriyal, Appalam, Curd & Payasam.",
        image: "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=400&q=80",
        inStock: true
      }
    ]
  }
];

const INITIAL_COUPONS = {
  "FIRST50": { discountPercent: 50, maxDiscount: 100, minOrder: 150, type: "percent" },
  "TASTY20": { discountPercent: 20, maxDiscount: 120, minOrder: 200, type: "percent" },
  "FREESHIP": { discountAmount: 35, minOrder: 199, type: "free_delivery" },
  "BHOJAN100": { discountAmount: 100, minOrder: 399, type: "flat" }
};

const INITIAL_COMPLAINTS = [
  {
    id: "COMP-101",
    customer: "Priya Sundaram",
    restaurant: "Thalappakatti Royal Biryani",
    orderId: "#ZB-9102",
    issue: "Raita container had a cracked lid during delivery.",
    amount: "₹60.00",
    status: "Pending Investigation"
  },
  {
    id: "COMP-102",
    customer: "Arun Kumar",
    restaurant: "Cheesy Oven Woodfired Pizzas",
    orderId: "#ZB-8924",
    issue: "Garlic bread was cold upon arrival due to rain delay.",
    amount: "₹160.00",
    status: "Pending Investigation"
  }
];

// =============================================================================
// 2. STATE INITIALIZATION & LOCALSTORAGE SYNC
// =============================================================================

let state = {
  currentRole: "customer", // 'customer' | 'restaurant' | 'admin'
  user: {
    isLoggedIn: true,
    name: "Karthik Raja",
    email: "karthik@example.com",
    phone: "+91 98401 23456",
    address: "Flat 402, Royal Palms, 2nd Avenue, Anna Nagar, Chennai"
  },
  restaurants: [],
  cart: {
    restaurantId: null,
    restaurantName: "",
    items: [], // [{ id, name, price, qty, isVeg }]
    appliedCoupon: null,
    deliveryFee: 35,
    platformFee: 5,
    riderTip: 20,
    notes: ""
  },
  activeOrder: null, // Holds currently tracked order
  ordersHistory: [],
  complaints: [],
  filters: {
    category: "All",
    searchQuery: "",
    vegOnly: false,
    rating4Plus: false,
    fastDelivery: false,
    offersOnly: false,
    sortBy: "relevance"
  },
  currentManagedRestId: "rest-1",
  adminCommissionRate: 15,
  currentModalRestaurant: null
};

// Load or Seed LocalStorage
function initApp() {
  const savedData = localStorage.getItem("zestybite_state_v1");
  if (savedData) {
    try {
      const parsed = JSON.parse(savedData);
      state.restaurants = parsed.restaurants || INITIAL_RESTAURANTS;
      state.ordersHistory = parsed.ordersHistory || [];
      state.activeOrder = parsed.activeOrder || null;
      state.cart = parsed.cart || state.cart;
      state.adminCommissionRate = parsed.adminCommissionRate || 15;
      state.complaints = parsed.complaints || INITIAL_COMPLAINTS;
      if (parsed.user) state.user = parsed.user;
    } catch (e) {
      console.warn("Storage parse error, resetting state:", e);
      resetToDefaultData(false);
    }
  } else {
    resetToDefaultData(false);
  }

  // Create an active demo order if none exists so reviewers can see live tracking immediately!
  if (!state.activeOrder) {
    createDemoActiveOrder();
  }

  renderApp();
  initDeliveryMapRoute();
}

function saveState() {
  localStorage.setItem("zestybite_state_v1", JSON.stringify({
    restaurants: state.restaurants,
    ordersHistory: state.ordersHistory,
    activeOrder: state.activeOrder,
    cart: state.cart,
    adminCommissionRate: state.adminCommissionRate,
    complaints: state.complaints,
    user: state.user
  }));
}

function resetToDefaultData(refreshUI = true) {
  state.restaurants = JSON.parse(JSON.stringify(INITIAL_RESTAURANTS));
  state.complaints = JSON.parse(JSON.stringify(INITIAL_COMPLAINTS));
  state.cart = {
    restaurantId: null,
    restaurantName: "",
    items: [],
    appliedCoupon: null,
    deliveryFee: 35,
    platformFee: 5,
    riderTip: 20,
    notes: ""
  };
  state.adminCommissionRate = 15;
  createDemoActiveOrder();
  saveState();
  if (refreshUI) {
    renderApp();
    showToast("System database reset to initial demo state! 🔄", "info");
  }
}

function createDemoActiveOrder() {
  state.activeOrder = {
    orderId: "#ZB-84920",
    restaurantId: "rest-1",
    restaurantName: "Thalappakatti Royal Biryani",
    items: [
      { id: "d-101", name: "Dindigul Thalappakatti Mutton Biryani", price: 360, qty: 1, isVeg: false },
      { id: "d-106", name: "Elaneer Payasam (Tender Coconut)", price: 95, qty: 1, isVeg: true }
    ],
    itemSubtotal: 455,
    deliveryFee: 35,
    platformFee: 5,
    gst: 22.75,
    discount: 50,
    riderTip: 20,
    grandTotal: 487.75,
    statusStep: 3, // 1: Placed, 2: Preparing, 3: Assigned, 4: Out for Delivery, 5: Delivered
    statusText: "Delivery Partner Assigned",
    etaMinutes: 21,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    deliveryAddress: state.user.address,
    rider: {
      name: "Karthik R.",
      rating: "4.9",
      vehicle: "TVS Apache • TN-09-BK-4291",
      phone: "+91 98401 23456",
      latProgress: 0.55
    }
  };
  if (!state.ordersHistory.some(o => o.orderId === state.activeOrder.orderId)) {
    state.ordersHistory.unshift(state.activeOrder);
  }
}

// =============================================================================
// 3. ROLE SWITCHER & NAVIGATION
// =============================================================================

function switchRole(roleName) {
  state.currentRole = roleName;

  // Update pills
  document.querySelectorAll("#rolePills .role-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-role") === roleName);
  });

  // Switch visible main module
  document.querySelectorAll(".app-module").forEach(mod => {
    mod.classList.remove("active-module");
  });

  const activeModule = document.getElementById(`module-${roleName}`);
  if (activeModule) {
    activeModule.classList.add("active-module");
  }

  // Update search box visibility
  const searchBox = document.getElementById("navSearchBox");
  if (searchBox) {
    searchBox.style.display = roleName === "customer" ? "flex" : "none";
  }

  // Render module specifics
  if (roleName === "customer") {
    renderRestaurantGrid();
  } else if (roleName === "restaurant") {
    renderPartnerPortal();
  } else if (roleName === "admin") {
    renderAdminPortal();
  }

  showToast(`Switched view to ${roleName.toUpperCase()} Module 🔄`, "info");
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function navigateToCustomerHome() {
  switchRole("customer");
  closeRestaurantMenuModal();
  closeOrderTrackingModal();
}

function changeDeliveryLocation(loc) {
  state.user.address = `Flat 402, Royal Palms, ${loc}`;
  const label = document.getElementById("cartDeliveryAddressLabel");
  if (label) label.textContent = loc;
  showToast(`Delivery location updated to ${loc} 📍`, "info");
}

// =============================================================================
// 4. CUSTOMER VIEW: FILTERING, SEARCHING & RESTAURANT RENDERING
// =============================================================================

function renderRestaurantGrid() {
  const grid = document.getElementById("restaurantsGrid");
  const emptyState = document.getElementById("emptyRestaurantState");
  if (!grid) return;

  grid.innerHTML = "";

  let list = state.restaurants.filter(r => r.isActive);

  // Filter: Category
  if (state.filters.category !== "All") {
    const cat = state.filters.category.toLowerCase();
    list = list.filter(r => {
      const matchCuisine = r.cuisines.some(c => c.toLowerCase().includes(cat));
      const matchDish = r.dishes.some(d => d.category.toLowerCase().includes(cat) || d.name.toLowerCase().includes(cat));
      return matchCuisine || matchDish;
    });
  }

  // Filter: Search keyword
  if (state.filters.searchQuery.trim() !== "") {
    const q = state.filters.searchQuery.toLowerCase();
    list = list.filter(r => {
      const matchRest = r.name.toLowerCase().includes(q) || r.cuisines.some(c => c.toLowerCase().includes(q));
      const matchDish = r.dishes.some(d => d.name.toLowerCase().includes(q));
      return matchRest || matchDish;
    });
  }

  // Filter: Veg only
  if (state.filters.vegOnly) {
    list = list.filter(r => r.isVegOnly || r.dishes.some(d => d.isVeg));
  }

  // Filter: Rating 4.2+
  if (state.filters.rating4Plus) {
    list = list.filter(r => r.rating >= 4.2);
  }

  // Filter: Fast delivery (<30 mins)
  if (state.filters.fastDelivery) {
    list = list.filter(r => r.deliveryMinutes <= 25);
  }

  // Filter: Offers Only
  if (state.filters.offersOnly) {
    list = list.filter(r => !!r.offer);
  }

  // Sorting
  if (state.filters.sortBy === "rating") {
    list.sort((a, b) => b.rating - a.rating);
  } else if (state.filters.sortBy === "deliveryTime") {
    list.sort((a, b) => a.deliveryMinutes - b.deliveryMinutes);
  } else if (state.filters.sortBy === "costLow") {
    list.sort((a, b) => a.costForTwo - b.costForTwo);
  } else if (state.filters.sortBy === "costHigh") {
    list.sort((a, b) => b.costForTwo - a.costForTwo);
  }

  if (list.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  list.forEach(rest => {
    const card = document.createElement("div");
    card.className = "restaurant-card";
    card.onclick = () => openRestaurantMenuModal(rest.id);

    card.innerHTML = `
      <div class="card-image-wrap">
        <img src="${rest.bannerImage}" alt="${rest.name}" loading="lazy">
        ${rest.offer ? `<span class="card-discount-badge">${rest.offer}</span>` : ""}
      </div>
      <div class="card-body">
        <div class="card-header-row">
          <h3 class="restaurant-title">${rest.name}</h3>
          <span class="rating-badge">★ ${rest.rating}</span>
        </div>
        <p class="card-cuisines">${rest.cuisines.join(", ")}</p>
        <div class="card-meta-row">
          <span class="meta-pill">⏱️ ${rest.deliveryTime}</span>
          <span class="meta-pill">₹${rest.costForTwo} for two</span>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

function filterByCategory(cat) {
  state.filters.category = cat;
  document.querySelectorAll("#categoryList .category-item").forEach(item => {
    const text = item.querySelector("span").textContent;
    item.classList.toggle("active", text.toLowerCase().includes(cat.toLowerCase()) || (cat === "All" && text.includes("All")));
  });
  renderRestaurantGrid();
}

function handleSearch(query) {
  state.filters.searchQuery = query;
  const clearBtn = document.getElementById("clearSearchBtn");
  if (clearBtn) {
    clearBtn.style.display = query ? "flex" : "none";
  }
  renderRestaurantGrid();
}

function clearSearch() {
  const input = document.getElementById("globalSearchInput");
  if (input) input.value = "";
  handleSearch("");
}

function toggleVegOnlyFilter() {
  state.filters.vegOnly = !state.filters.vegOnly;
  const btn = document.getElementById("filterVegOnly");
  if (btn) btn.classList.toggle("active", state.filters.vegOnly);
  renderRestaurantGrid();
}

function toggleRatingFilter() {
  state.filters.rating4Plus = !state.filters.rating4Plus;
  const btn = document.getElementById("filterRating4");
  if (btn) btn.classList.toggle("active", state.filters.rating4Plus);
  renderRestaurantGrid();
}

function toggleFastDeliveryFilter() {
  state.filters.fastDelivery = !state.filters.fastDelivery;
  const btn = document.getElementById("filterFastDelivery");
  if (btn) btn.classList.toggle("active", state.filters.fastDelivery);
  renderRestaurantGrid();
}

function toggleOffersFilter() {
  state.filters.offersOnly = !state.filters.offersOnly;
  const btn = document.getElementById("filterOffers");
  if (btn) btn.classList.toggle("active", state.filters.offersOnly);
  renderRestaurantGrid();
}

function applySorting(sortVal) {
  state.filters.sortBy = sortVal;
  renderRestaurantGrid();
}

function resetAllFilters() {
  state.filters = {
    category: "All",
    searchQuery: "",
    vegOnly: false,
    rating4Plus: false,
    fastDelivery: false,
    offersOnly: false,
    sortBy: "relevance"
  };
  document.querySelectorAll(".filter-chip").forEach(c => c.classList.remove("active"));
  document.querySelectorAll(".category-item").forEach((it, idx) => it.classList.toggle("active", idx === 0));
  const sortSelect = document.getElementById("sortBySelect");
  if (sortSelect) sortSelect.value = "relevance";
  clearSearch();
  renderRestaurantGrid();
}

// =============================================================================
// 5. RESTAURANT MENU DETAIL MODAL & DISH CONTROLS
// =============================================================================

function openRestaurantMenuModal(restaurantId) {
  const rest = state.restaurants.find(r => r.id === restaurantId);
  if (!rest) return;

  state.currentModalRestaurant = rest;

  document.getElementById("modalRestName").textContent = rest.name;
  document.getElementById("modalRestCuisine").textContent = rest.cuisines.join(", ");
  document.getElementById("modalRestAddress").textContent = `📍 ${rest.location}`;
  document.getElementById("modalRestRating").textContent = rest.rating;
  document.getElementById("modalRestReviewCount").textContent = `(${rest.reviewCount} reviews)`;
  document.getElementById("modalRestTime").textContent = rest.deliveryTime;
  document.getElementById("modalRestCost").textContent = `₹${rest.costForTwo} for two`;
  document.getElementById("modalRestOffer").textContent = rest.offer || "Best Price Guarantee";

  // Category Tabs inside Restaurant
  const categories = ["All", ...new Set(rest.dishes.map(d => d.category))];
  const pillsContainer = document.getElementById("modalCategoryPills");
  pillsContainer.innerHTML = "";
  categories.forEach((cat, index) => {
    const btn = document.createElement("button");
    btn.className = `menu-cat-btn ${index === 0 ? "active" : ""}`;
    btn.textContent = cat;
    btn.onclick = () => {
      document.querySelectorAll(".menu-cat-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      renderModalDishes(cat);
    };
    pillsContainer.appendChild(btn);
  });

  renderModalDishes("All");

  const modal = document.getElementById("restaurantMenuModal");
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function closeRestaurantMenuModal() {
  const modal = document.getElementById("restaurantMenuModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

function handleMenuSearch(keyword) {
  renderModalDishes("All", keyword.toLowerCase());
}

function renderModalDishes(selectedCat = "All", searchKw = "") {
  const rest = state.currentModalRestaurant;
  const container = document.getElementById("modalDishesContainer");
  if (!rest || !container) return;

  container.innerHTML = "";

  let dishes = rest.dishes;
  if (selectedCat !== "All") {
    dishes = dishes.filter(d => d.category === selectedCat);
  }
  if (searchKw) {
    dishes = dishes.filter(d => d.name.toLowerCase().includes(searchKw) || d.description.toLowerCase().includes(searchKw));
  }

  if (dishes.length === 0) {
    container.innerHTML = `<div class="empty-state"><h4>No dishes found</h4></div>`;
    return;
  }

  // Group by category
  const categories = [...new Set(dishes.map(d => d.category))];

  categories.forEach(catName => {
    const catDishes = dishes.filter(d => d.category === catName);

    const group = document.createElement("div");
    group.className = "dish-category-group";
    group.innerHTML = `
      <div class="dish-category-title">
        <span>${catName} (${catDishes.length})</span>
      </div>
    `;

    catDishes.forEach(dish => {
      const cartItem = state.cart.items.find(i => i.id === dish.id);
      const qty = cartItem ? cartItem.qty : 0;

      const itemCard = document.createElement("div");
      itemCard.className = "dish-card-item";
      itemCard.innerHTML = `
        <div class="dish-info-left">
          <div class="dish-type-row">
            <span class="${dish.isVeg ? "veg-dot-icon" : "non-veg-dot-icon"}"></span>
            ${dish.isBestseller ? `<span class="bestseller-tag">★ BESTSELLER</span>` : ""}
            ${!dish.inStock ? `<span class="bestseller-tag" style="background:#fee2e2;color:#dc2626;">OUT OF STOCK</span>` : ""}
          </div>
          <h4 class="dish-item-name">${dish.name}</h4>
          <div class="dish-price-row">₹${dish.price}</div>
          <p class="dish-item-desc">${dish.description}</p>
        </div>
        <div class="dish-action-right">
          <img src="${dish.image}" alt="${dish.name}" class="dish-img-thumb" loading="lazy">
          <div class="dish-add-control" id="control-${dish.id}">
            ${dish.inStock ? (
              qty === 0
                ? `<button class="btn-add-item" onclick="addItemToCart('${rest.id}', '${dish.id}')">ADD</button>`
                : `<div class="qty-counter-group">
                    <button class="qty-btn" onclick="decreaseCartQty('${dish.id}')">-</button>
                    <span class="qty-count-val">${qty}</span>
                    <button class="qty-btn" onclick="increaseCartQty('${dish.id}')">+</button>
                   </div>`
            ) : `<span style="font-size:0.75rem;font-weight:700;color:#94a3b8;padding:4px;">UNAVAILABLE</span>`}
          </div>
        </div>
      `;
      group.appendChild(itemCard);
    });

    container.appendChild(group);
  });
}

// =============================================================================
// 6. CART MANAGEMENT & BILLING CALCULATIONS
// =============================================================================

function addItemToCart(restaurantId, dishId) {
  const rest = state.restaurants.find(r => r.id === restaurantId);
  if (!rest) return;

  const dish = rest.dishes.find(d => d.id === dishId);
  if (!dish || !dish.inStock) return;

  // Single restaurant cart constraint check
  if (state.cart.items.length > 0 && state.cart.restaurantId !== restaurantId) {
    const confirmSwitch = confirm(`Your cart contains items from "${state.cart.restaurantName}". Would you like to clear your cart and add items from "${rest.name}"?`);
    if (confirmSwitch) {
      state.cart.items = [];
      state.cart.appliedCoupon = null;
    } else {
      return;
    }
  }

  state.cart.restaurantId = rest.id;
  state.cart.restaurantName = rest.name;

  const existing = state.cart.items.find(i => i.id === dishId);
  if (existing) {
    existing.qty += 1;
  } else {
    state.cart.items.push({
      id: dish.id,
      name: dish.name,
      price: dish.price,
      isVeg: dish.isVeg,
      qty: 1
    });
  }

  saveState();
  updateCartUI();
  playAudioChime(600, "triangle", 0.08);
  showToast(`Added "${dish.name}" to cart! 🛒`, "success");

  // Re-render dish counter in modal if open
  if (state.currentModalRestaurant) {
    updateModalDishButton(dishId);
  }
}

function increaseCartQty(dishId) {
  const item = state.cart.items.find(i => i.id === dishId);
  if (item) {
    item.qty += 1;
    saveState();
    updateCartUI();
    if (state.currentModalRestaurant) updateModalDishButton(dishId);
  }
}

function decreaseCartQty(dishId) {
  const index = state.cart.items.findIndex(i => i.id === dishId);
  if (index !== -1) {
    if (state.cart.items[index].qty > 1) {
      state.cart.items[index].qty -= 1;
    } else {
      state.cart.items.splice(index, 1);
      if (state.cart.items.length === 0) {
        state.cart.restaurantId = null;
        state.cart.restaurantName = "";
        state.cart.appliedCoupon = null;
      }
    }
    saveState();
    updateCartUI();
    if (state.currentModalRestaurant) updateModalDishButton(dishId);
  }
}

function updateModalDishButton(dishId) {
  const control = document.getElementById(`control-${dishId}`);
  if (!control) return;

  const cartItem = state.cart.items.find(i => i.id === dishId);
  const qty = cartItem ? cartItem.qty : 0;

  if (qty === 0) {
    control.innerHTML = `<button class="btn-add-item" onclick="addItemToCart('${state.currentModalRestaurant.id}', '${dishId}')">ADD</button>`;
  } else {
    control.innerHTML = `
      <div class="qty-counter-group">
        <button class="qty-btn" onclick="decreaseCartQty('${dishId}')">-</button>
        <span class="qty-count-val">${qty}</span>
        <button class="qty-btn" onclick="increaseCartQty('${dishId}')">+</button>
      </div>
    `;
  }
}

function calculateBill() {
  const subtotal = state.cart.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  let delivery = subtotal > 0 ? state.cart.deliveryFee : 0;
  let platform = subtotal > 0 ? state.cart.platformFee : 0;
  let gst = subtotal > 0 ? Math.round(subtotal * 0.05 * 100) / 100 : 0;
  let discount = 0;

  if (state.cart.appliedCoupon && subtotal > 0) {
    const coupon = INITIAL_COUPONS[state.cart.appliedCoupon];
    if (coupon) {
      if (coupon.type === "percent") {
        discount = Math.min((subtotal * coupon.discountPercent) / 100, coupon.maxDiscount);
      } else if (coupon.type === "free_delivery") {
        discount = delivery;
        delivery = 0;
      } else if (coupon.type === "flat") {
        discount = coupon.discountAmount;
      }
    }
  }

  const grandTotal = Math.max(0, subtotal + delivery + platform + gst + state.cart.riderTip - discount);

  return {
    subtotal,
    delivery,
    platform,
    gst,
    discount,
    tip: state.cart.riderTip,
    grandTotal: Math.round(grandTotal * 100) / 100
  };
}

function updateCartUI() {
  const bill = calculateBill();
  const totalCount = state.cart.items.reduce((sum, i) => sum + i.qty, 0);

  // Top Nav Badges
  const cartBadge = document.getElementById("cartCountBadge");
  const cartNavTotal = document.getElementById("cartTotalNav");
  if (cartBadge) cartBadge.textContent = totalCount;
  if (cartNavTotal) cartNavTotal.textContent = `₹${bill.grandTotal}`;

  // Floating Cart Bar
  const floatPill = document.getElementById("floatingCartPill");
  if (floatPill) {
    if (totalCount > 0) {
      floatPill.style.display = "flex";
      document.getElementById("floatPillCount").textContent = `${totalCount} item${totalCount > 1 ? "s" : ""}`;
      document.getElementById("floatPillTotal").textContent = `₹${bill.grandTotal}`;
    } else {
      floatPill.style.display = "none";
    }
  }

  // Cart Drawer
  const cartEmpty = document.getElementById("cartEmptyView");
  const cartFilled = document.getElementById("cartFilledView");
  const cartFooter = document.getElementById("cartFooter");
  const restNameTag = document.getElementById("cartRestaurantName");
  const itemsContainer = document.getElementById("cartItemsList");

  if (totalCount === 0) {
    if (cartEmpty) cartEmpty.style.display = "flex";
    if (cartFilled) cartFilled.style.display = "none";
    if (cartFooter) cartFooter.style.display = "none";
    if (restNameTag) restNameTag.textContent = "";
  } else {
    if (cartEmpty) cartEmpty.style.display = "none";
    if (cartFilled) cartFilled.style.display = "block";
    if (cartFooter) cartFooter.style.display = "block";
    if (restNameTag) restNameTag.textContent = state.cart.restaurantName;

    // Render items
    if (itemsContainer) {
      itemsContainer.innerHTML = "";
      state.cart.items.forEach(item => {
        const row = document.createElement("div");
        row.className = "cart-item-row";
        row.innerHTML = `
          <div class="cart-item-left">
            <span class="${item.isVeg ? "veg-dot-icon" : "non-veg-dot-icon"}"></span>
            <div>
              <div class="cart-item-title">${item.name}</div>
              <div class="cart-item-price">₹${item.price} each</div>
            </div>
          </div>
          <div class="cart-item-controls">
            <div class="qty-counter-group" style="width: 80px; border: 1px solid #cbd5e1; border-radius: 4px;">
              <button class="qty-btn" onclick="decreaseCartQty('${item.id}')">-</button>
              <span class="qty-count-val">${item.qty}</span>
              <button class="qty-btn" onclick="increaseCartQty('${item.id}')">+</button>
            </div>
            <strong style="min-width: 60px; text-align: right;">₹${item.price * item.qty}</strong>
          </div>
        `;
        itemsContainer.appendChild(row);
      });
    }

    // Bill lines
    document.getElementById("billSubtotal").textContent = `₹${bill.subtotal}`;
    document.getElementById("billDeliveryFee").textContent = bill.delivery === 0 ? "FREE" : `₹${bill.delivery}`;
    document.getElementById("billPlatformFee").textContent = `₹${bill.platform}`;
    document.getElementById("billGst").textContent = `₹${bill.gst}`;
    document.getElementById("billTip").textContent = `₹${bill.tip}`;

    const discountRow = document.getElementById("billDiscountRow");
    if (bill.discount > 0) {
      discountRow.style.display = "flex";
      document.getElementById("billDiscount").textContent = `-₹${bill.discount}`;
    } else {
      discountRow.style.display = "none";
    }

    document.getElementById("billGrandTotal").textContent = `₹${bill.grandTotal}`;
    document.getElementById("checkoutCtaAmount").textContent = `₹${bill.grandTotal}`;
  }
}

function openCartDrawer() {
  updateCartUI();
  const drawer = document.getElementById("cartDrawerOverlay");
  if (drawer) drawer.classList.add("active");
}

function closeCartDrawer(event) {
  const drawer = document.getElementById("cartDrawerOverlay");
  if (drawer) drawer.classList.remove("active");
}

// Promo Code Management
function applyCouponCode() {
  const input = document.getElementById("couponCodeInput");
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  executeApplyCoupon(code);
}

function quickApplyCoupon(code) {
  const input = document.getElementById("couponCodeInput");
  if (input) input.value = code;
  executeApplyCoupon(code);
}

function executeApplyCoupon(code) {
  const coupon = INITIAL_COUPONS[code];
  if (!coupon) {
    showToast(`Invalid coupon code "${code}". Try FIRST50 or TASTY20!`, "danger");
    return;
  }

  const subtotal = state.cart.items.reduce((sum, item) => sum + (item.price * item.qty), 0);
  if (subtotal < coupon.minOrder) {
    showToast(`Minimum order of ₹${coupon.minOrder} required for code ${code}!`, "danger");
    return;
  }

  state.cart.appliedCoupon = code;
  saveState();
  updateCartUI();

  const pill = document.getElementById("appliedCouponPill");
  if (pill) {
    pill.style.display = "flex";
    document.getElementById("appliedCouponName").textContent = code;
  }

  playAudioChime(750, "sine", 0.1);
  showToast(`Coupon ${code} applied successfully! 🎉`, "success");
}

function removeCoupon() {
  state.cart.appliedCoupon = null;
  saveState();
  updateCartUI();
  const pill = document.getElementById("appliedCouponPill");
  if (pill) pill.style.display = "none";
  showToast("Coupon removed", "info");
}

function setRiderTip(amount, element) {
  state.cart.riderTip = amount;
  document.querySelectorAll(".tip-btn").forEach(btn => btn.classList.remove("active"));
  if (element) element.classList.add("active");
  saveState();
  updateCartUI();
}

function copyCoupon(code) {
  navigator.clipboard?.writeText(code);
  showToast(`Copied ${code} to clipboard! Paste it in cart.`, "info");
}

// =============================================================================
// 7. PAYMENT GATEWAY SIMULATION & ORDER PLACEMENT
// =============================================================================

function openPaymentModal() {
  if (state.cart.items.length === 0) {
    showToast("Please add dishes to your cart first!", "danger");
    return;
  }

  closeCartDrawer();
  const bill = calculateBill();

  document.getElementById("paymentModalTotal").textContent = `₹${bill.grandTotal}`;
  document.getElementById("btnPayAmount").textContent = `Pay ₹${bill.grandTotal}`;
  document.getElementById("paymentModalRestName").textContent = state.cart.restaurantName;

  const modal = document.getElementById("paymentModal");
  if (modal) modal.classList.add("active");
}

function closePaymentModal() {
  const modal = document.getElementById("paymentModal");
  if (modal) modal.classList.remove("active");
}

function switchPayTab(tabKey, element) {
  document.querySelectorAll(".pay-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".pay-tab-content").forEach(content => content.classList.remove("active"));

  if (element) element.classList.add("active");
  const tabContent = document.getElementById(`payTab-${tabKey}`);
  if (tabContent) tabContent.classList.add("active");
}

function autofillTestCard() {
  document.getElementById("cardNumberInput").value = "4532 8901 2345 8921";
  document.getElementById("cardExpiryInput").value = "08/29";
  document.getElementById("cardCvvInput").value = "882";
  document.getElementById("cardNameInput").value = state.user.name;
  showToast("Loaded test payment credentials! 💳", "info");
}

function executePayment() {
  const processingScreen = document.getElementById("paymentProcessingScreen");
  const title = document.getElementById("paymentProcessStatusTitle");
  const desc = document.getElementById("paymentProcessStatusDesc");

  if (processingScreen) processingScreen.style.display = "flex";

  // Simulate payment lifecycle
  setTimeout(() => {
    if (title) title.textContent = "Verifying with Banking Network...";
    if (desc) desc.textContent = "256-bit secure gateway handshaking completed.";
  }, 700);

  setTimeout(() => {
    finalizeOrderPlacement();
  }, 1500);
}

function finalizeOrderPlacement() {
  const bill = calculateBill();
  const newOrderId = `#ZB-${Math.floor(10000 + Math.random() * 90000)}`;

  const createdOrder = {
    orderId: newOrderId,
    restaurantId: state.cart.restaurantId,
    restaurantName: state.cart.restaurantName,
    items: JSON.parse(JSON.stringify(state.cart.items)),
    itemSubtotal: bill.subtotal,
    deliveryFee: bill.delivery,
    platformFee: bill.platform,
    gst: bill.gst,
    discount: bill.discount,
    riderTip: bill.tip,
    grandTotal: bill.grandTotal,
    statusStep: 1, // Order placed
    statusText: "Order Placed & Confirmed",
    etaMinutes: 28,
    timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
    date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' }),
    deliveryAddress: state.user.address,
    rider: {
      name: "Karthik R.",
      rating: "4.9",
      vehicle: "TVS Apache • TN-09-BK-4291",
      phone: "+91 98401 23456",
      latProgress: 0.15
    }
  };

  state.activeOrder = createdOrder;
  state.ordersHistory.unshift(createdOrder);

  // Clear customer cart
  state.cart.items = [];
  state.cart.restaurantId = null;
  state.cart.appliedCoupon = null;

  saveState();

  // Hide modal & processing screen
  const processingScreen = document.getElementById("paymentProcessingScreen");
  if (processingScreen) processingScreen.style.display = "none";
  closePaymentModal();

  playPaymentSuccessChime();
  showToast(`Payment successful! Order ${newOrderId} placed! 🎉`, "success");

  // Show active order tracking
  updateCartUI();
  showOrderTrackingView();
}

// =============================================================================
// 8. LIVE ORDER TRACKING, STEPPER & DYNAMIC SVG MAP
// =============================================================================

function showOrderTrackingView() {
  if (!state.activeOrder) {
    showToast("No active order currently in progress.", "info");
    return;
  }

  const order = state.activeOrder;
  const modal = document.getElementById("orderTrackingModal");

  document.getElementById("trackOrderId").textContent = `Order ${order.orderId}`;
  document.getElementById("trackOrderTime").textContent = `Placed Today at ${order.timestamp}`;
  document.getElementById("trackAddressText").textContent = order.deliveryAddress;
  document.getElementById("trackBillTotal").textContent = `₹${order.grandTotal}`;
  document.getElementById("trackItemCount").textContent = `${order.items.length} item${order.items.length > 1 ? "s" : ""}`;

  // Populate items
  const itemsContainer = document.getElementById("trackItemsList");
  if (itemsContainer) {
    itemsContainer.innerHTML = "";
    order.items.forEach(i => {
      const row = document.createElement("div");
      row.style.display = "flex";
      row.style.justifyContent = "space-between";
      row.innerHTML = `<span>${i.qty}x ${i.name}</span><strong>₹${i.price * i.qty}</strong>`;
      itemsContainer.appendChild(row);
    });
  }

  updateTrackingStepperUI();
  updateMapRoutePosition();

  modal.classList.add("active");
  document.body.style.overflow = "hidden";

  // Also show top nav tracking button
  const trackingNavBtn = document.getElementById("liveTrackingNavBtn");
  if (trackingNavBtn) trackingNavBtn.style.display = "inline-flex";
}

function closeOrderTrackingModal() {
  const modal = document.getElementById("orderTrackingModal");
  if (modal) modal.classList.remove("active");
  document.body.style.overflow = "";
}

function updateTrackingStepperUI() {
  const order = state.activeOrder;
  if (!order) return;

  const step = order.statusStep; // 1 to 5

  const steps = [
    { id: "step-placed", timeId: "time-placed", time: order.timestamp, title: "Order Placed & Confirmed" },
    { id: "step-preparing", timeId: "time-preparing", time: "+2 mins", title: "Kitchen is Preparing your Feast" },
    { id: "step-assigned", timeId: "time-assigned", time: "+5 mins", title: "Delivery Partner Assigned" },
    { id: "step-out", timeId: "time-out", time: "+12 mins", title: "Out for Delivery" },
    { id: "step-delivered", timeId: "time-delivered", time: "+25 mins", title: "Order Delivered" }
  ];

  steps.forEach((s, idx) => {
    const el = document.getElementById(s.id);
    const timeEl = document.getElementById(s.timeId);
    if (!el) return;

    el.classList.remove("completed", "active-step");
    if (idx + 1 < step) {
      el.classList.add("completed");
      if (timeEl) timeEl.textContent = s.time;
    } else if (idx + 1 === step) {
      el.classList.add("completed", "active-step");
      if (timeEl) timeEl.textContent = "In Progress";
    } else {
      if (timeEl) timeEl.textContent = "Pending";
    }
  });

  // ETA text
  const etaTimer = document.getElementById("trackEtaTimer");
  const liveStatusText = document.getElementById("mapLiveStatusText");

  if (step === 1) {
    if (etaTimer) etaTimer.textContent = "28 mins (Cooking starting soon)";
    if (liveStatusText) liveStatusText.textContent = "Kitchen received order. Preparing ingredients.";
  } else if (step === 2) {
    if (etaTimer) etaTimer.textContent = "22 mins (Food is sizzling in the pan)";
    if (liveStatusText) liveStatusText.textContent = "Chef is packing your delicious order.";
  } else if (step === 3) {
    if (etaTimer) etaTimer.textContent = "16 mins (Rider arrived at restaurant)";
    if (liveStatusText) liveStatusText.textContent = "Delivery Partner Karthik has picked up the parcel.";
  } else if (step === 4) {
    if (etaTimer) etaTimer.textContent = "8 mins (Rider is on the way!)";
    if (liveStatusText) liveStatusText.textContent = "Driver is cruising on 2nd Avenue towards your address.";
  } else if (step === 5) {
    if (etaTimer) etaTimer.textContent = "Delivered! 🎉 Enjoy your hot meal!";
    if (liveStatusText) liveStatusText.textContent = "Food delivered safely at your door.";
  }
}

function simulateNextOrderStatus() {
  if (!state.activeOrder) return;

  if (state.activeOrder.statusStep < 5) {
    state.activeOrder.statusStep += 1;
    saveState();
    updateTrackingStepperUI();
    updateMapRoutePosition();
    playAudioChime(800, "sine", 0.1);
    showToast(`Order status updated to Step ${state.activeOrder.statusStep} of 5! 🚀`, "success");
  } else {
    state.activeOrder.statusStep = 1;
    saveState();
    updateTrackingStepperUI();
    updateMapRoutePosition();
    showToast("Status looped back to Step 1 for demonstration 🔄", "info");
  }

  // Update Restaurant Partner view in real time
  if (state.currentRole === "restaurant") {
    renderPartnerPortal();
  }
}

function updateMapRoutePosition() {
  const riderMarker = document.getElementById("riderMarker");
  const routeActive = document.getElementById("routeActivePath");
  if (!riderMarker || !state.activeOrder) return;

  const step = state.activeOrder.statusStep;

  // Waypoints on map: 1: (90, 220), 2: (180, 220), 3: (180, 140), 4: (320, 140), 5: (520, 60)
  const coords = [
    { x: 90, y: 220, dashOffset: 650 },
    { x: 180, y: 220, dashOffset: 520 },
    { x: 180, y: 140, dashOffset: 380 },
    { x: 320, y: 100, dashOffset: 180 },
    { x: 520, y: 60, dashOffset: 0 }
  ];

  const pos = coords[step - 1] || coords[0];
  riderMarker.setAttribute("transform", `translate(${pos.x}, ${pos.y})`);

  if (routeActive) {
    routeActive.style.transition = "stroke-dashoffset 0.8s ease-in-out";
    routeActive.setAttribute("stroke-dashoffset", pos.dashOffset);
  }
}

function initDeliveryMapRoute() {
  updateMapRoutePosition();
}

function cancelCurrentOrder() {
  if (!confirm("Are you sure you want to cancel this order?")) return;
  if (state.activeOrder) {
    state.activeOrder.statusStep = 5;
    state.activeOrder.statusText = "Cancelled";
    saveState();
    showToast("Order has been cancelled. Refund initiated to source. ❌", "danger");
    closeOrderTrackingModal();
    const navBtn = document.getElementById("liveTrackingNavBtn");
    if (navBtn) navBtn.style.display = "none";
  }
}

// =============================================================================
// 9. MODULE 2: RESTAURANT PARTNER PORTAL (CRUD & ORDERS)
// =============================================================================

function renderPartnerPortal() {
  const rest = state.restaurants.find(r => r.id === state.currentManagedRestId) || state.restaurants[0];
  if (!rest) return;

  // Populate Restaurant Selector
  const selector = document.getElementById("partnerRestSelector");
  if (selector) {
    selector.innerHTML = "";
    state.restaurants.forEach(r => {
      const opt = document.createElement("option");
      opt.value = r.id;
      opt.textContent = `${r.name} (${r.location.split(",")[0]})`;
      opt.selected = r.id === rest.id;
      selector.appendChild(opt);
    });
  }

  // Header Title
  const title = document.getElementById("partnerPortalRestTitle");
  if (title) title.textContent = rest.name;

  // Render Live Orders for this Restaurant
  renderPartnerOrders(rest.id);

  // Render Menu CRUD Table
  renderPartnerMenuTable(rest);

  // Render Analytics Tab
  renderPartnerAnalytics(rest);
}

function changeManagedRestaurant(restId) {
  state.currentManagedRestId = restId;
  renderPartnerPortal();
  showToast(`Switched kitchen management to ${restId}`, "info");
}

function switchPartnerTab(tabKey, element) {
  document.querySelectorAll(".partner-tabs-nav .partner-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".partner-tab-content").forEach(c => c.classList.remove("active"));

  if (element) element.classList.add("active");
  const target = document.getElementById(`partnerTab-${tabKey}`);
  if (target) target.classList.add("active");
}

function renderPartnerOrders(restaurantId) {
  const container = document.getElementById("partnerOrdersList");
  const emptyState = document.getElementById("partnerNoOrdersState");
  const badge = document.getElementById("partnerOrderBadge");
  const liveCountBadge = document.getElementById("partnerLiveOrderCount");

  if (!container) return;
  container.innerHTML = "";

  const relevantOrders = state.ordersHistory.filter(o => o.restaurantId === restaurantId);

  if (badge) badge.textContent = relevantOrders.length;
  if (liveCountBadge) liveCountBadge.textContent = relevantOrders.length;

  if (relevantOrders.length === 0) {
    if (emptyState) emptyState.style.display = "block";
    return;
  } else {
    if (emptyState) emptyState.style.display = "none";
  }

  relevantOrders.forEach(order => {
    const card = document.createElement("div");
    card.className = "partner-order-card";

    let statusClass = "status-pending";
    if (order.statusStep === 2) statusClass = "status-preparing";
    if (order.statusStep >= 3 && order.statusStep <= 4) statusClass = "status-out";
    if (order.statusStep === 5) statusClass = "status-delivered";

    card.innerHTML = `
      <div class="order-card-top">
        <div>
          <span class="order-card-id">${order.orderId}</span>
          <div style="font-size:0.75rem; color:#64748b;">${order.date} at ${order.timestamp}</div>
        </div>
        <span class="order-badge-status ${statusClass}">${order.statusText} (Step ${order.statusStep}/5)</span>
      </div>
      <div class="order-customer-info">
        <strong>Customer:</strong> ${state.user.name} • ${state.user.phone}<br>
        <strong>Address:</strong> ${order.deliveryAddress}
      </div>
      <div class="order-food-items">
        ${order.items.map(i => `<div>• ${i.qty}x ${i.name} (₹${i.price * i.qty})</div>`).join("")}
      </div>
      <div class="order-bill-amount">Paid: ₹${order.grandTotal}</div>
      <div class="order-actions-row">
        ${order.statusStep === 1 ? `<button class="btn btn-sm btn-primary" onclick="partnerUpdateOrderStatus('${order.orderId}', 2)">Accept & Start Cooking 🍳</button>` : ""}
        ${order.statusStep === 2 ? `<button class="btn btn-sm btn-primary" onclick="partnerUpdateOrderStatus('${order.orderId}', 3)">Dispatch to Rider 🛵</button>` : ""}
        ${order.statusStep === 3 ? `<button class="btn btn-sm btn-primary" onclick="partnerUpdateOrderStatus('${order.orderId}', 4)">Mark Out For Delivery 🚀</button>` : ""}
        ${order.statusStep === 4 ? `<button class="btn btn-sm btn-outline-sm" onclick="partnerUpdateOrderStatus('${order.orderId}', 5)">Mark Delivered ✅</button>` : ""}
        <button class="btn btn-sm btn-outline-sm" onclick="printInvoice('${order.orderId}')">Invoice</button>
      </div>
    `;
    container.appendChild(card);
  });
}

function partnerUpdateOrderStatus(orderId, nextStep) {
  const order = state.ordersHistory.find(o => o.orderId === orderId);
  if (order) {
    order.statusStep = nextStep;
    if (nextStep === 2) order.statusText = "Kitchen is Preparing";
    if (nextStep === 3) order.statusText = "Rider Assigned";
    if (nextStep === 4) order.statusText = "Out for Delivery";
    if (nextStep === 5) order.statusText = "Delivered";

    if (state.activeOrder && state.activeOrder.orderId === orderId) {
      state.activeOrder.statusStep = nextStep;
      state.activeOrder.statusText = order.statusText;
    }

    saveState();
    renderPartnerPortal();
    playAudioChime(700, "triangle", 0.08);
    showToast(`Order ${orderId} moved to step: ${order.statusText}! ✅`, "success");
  }
}

// Menu Management CRUD
function renderPartnerMenuTable(rest) {
  const tbody = document.getElementById("partnerMenuTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  rest.dishes.forEach(dish => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <div class="table-dish-cell">
          <img src="${dish.image}" alt="${dish.name}" class="table-dish-thumb">
          <div>
            <strong>${dish.name}</strong>
            <div style="font-size:0.75rem; color:#64748b;">${dish.description.substring(0, 48)}...</div>
          </div>
        </div>
      </td>
      <td><strong>${dish.category}</strong></td>
      <td>
        <span class="${dish.isVeg ? "veg-dot-icon" : "non-veg-dot-icon"}" title="${dish.isVeg ? "Veg" : "Non-Veg"}"></span>
      </td>
      <td>
        <span style="font-weight:700;">₹${dish.price}</span>
        <button class="btn btn-sm btn-outline-sm" style="margin-left:6px; padding:2px 6px; font-size:0.7rem;" onclick="partnerEditDishPrice('${rest.id}', '${dish.id}')">Edit</button>
      </td>
      <td>
        <label class="switch">
          <input type="checkbox" ${dish.inStock ? "checked" : ""} onchange="partnerToggleDishStock('${rest.id}', '${dish.id}', this.checked)">
          <span class="slider-toggle"></span>
        </label>
        <small style="margin-left: 6px; font-weight:600; color:${dish.inStock ? '#10b981' : '#ef4444'}">${dish.inStock ? "In Stock" : "Sold Out"}</small>
      </td>
      <td>
        <button class="btn btn-sm btn-danger-outline" onclick="partnerDeleteDish('${rest.id}', '${dish.id}')">Delete</button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function partnerToggleDishStock(restId, dishId, inStock) {
  const rest = state.restaurants.find(r => r.id === restId);
  if (!rest) return;
  const dish = rest.dishes.find(d => d.id === dishId);
  if (dish) {
    dish.inStock = inStock;
    saveState();
    showToast(`Updated "${dish.name}" to ${inStock ? "In Stock" : "Sold Out"}!`, "info");
  }
}

function partnerEditDishPrice(restId, dishId) {
  const rest = state.restaurants.find(r => r.id === restId);
  const dish = rest?.dishes.find(d => d.id === dishId);
  if (!dish) return;

  const newPrice = prompt(`Enter new price for "${dish.name}" (₹):`, dish.price);
  if (newPrice && !isNaN(newPrice) && Number(newPrice) > 0) {
    dish.price = Math.round(Number(newPrice));
    saveState();
    renderPartnerMenuTable(rest);
    showToast(`Price for "${dish.name}" updated to ₹${dish.price}!`, "success");
  }
}

function partnerDeleteDish(restId, dishId) {
  const rest = state.restaurants.find(r => r.id === restId);
  if (!rest) return;
  if (!confirm("Are you sure you want to permanently delete this menu dish?")) return;

  rest.dishes = rest.dishes.filter(d => d.id !== dishId);
  saveState();
  renderPartnerMenuTable(rest);
  showToast("Dish removed from menu.", "info");
}

function openAddDishModal() {
  const modal = document.getElementById("addDishModal");
  if (modal) modal.classList.add("active");
}

function closeAddDishModal() {
  const modal = document.getElementById("addDishModal");
  if (modal) modal.classList.remove("active");
}

function setPresetDishImg(type) {
  const input = document.getElementById("newDishImage");
  if (!input) return;
  const presets = {
    biryani: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80",
    pizza: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=400&q=80",
    burger: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=400&q=80",
    dessert: "https://images.unsplash.com/photo-1541832676-9b763b0239ab?auto=format&fit=crop&w=400&q=80"
  };
  input.value = presets[type] || presets.biryani;
}

function handleAddNewDish(event) {
  event.preventDefault();
  const rest = state.restaurants.find(r => r.id === state.currentManagedRestId);
  if (!rest) return;

  const name = document.getElementById("newDishName").value.trim();
  const category = document.getElementById("newDishCategory").value;
  const isVeg = document.getElementById("newDishVeg").value === "veg";
  const price = Number(document.getElementById("newDishPrice").value);
  const description = document.getElementById("newDishDesc").value.trim();
  const image = document.getElementById("newDishImage").value.trim();

  const newDish = {
    id: `dish-custom-${Date.now()}`,
    name,
    category,
    price,
    isVeg,
    isBestseller: false,
    rating: 4.5,
    description: description || "Freshly prepared chef specialty.",
    image: image || "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=400&q=80",
    inStock: true
  };

  rest.dishes.unshift(newDish);
  saveState();
  closeAddDishModal();
  renderPartnerMenuTable(rest);
  showToast(`Added "${name}" to ${rest.name} menu! 🍲`, "success");
}

function renderPartnerAnalytics(rest) {
  const rankingList = document.getElementById("topDishesRanking");
  if (!rankingList) return;
  rankingList.innerHTML = "";

  rest.dishes.slice(0, 4).forEach((dish, idx) => {
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.justifyContent = "space-between";
    div.style.padding = "8px 0";
    div.style.borderBottom = "1px solid #e2e8f0";
    div.innerHTML = `
      <span><strong>#${idx + 1}</strong> ${dish.name}</span>
      <strong>${Math.floor(85 - idx * 18)} orders this week</strong>
    `;
    rankingList.appendChild(div);
  });
}

// =============================================================================
// 10. MODULE 3: SUPER ADMIN OPERATIONS DASHBOARD
// =============================================================================

function renderAdminPortal() {
  // Compute Platform Totals
  const totalGmv = state.ordersHistory.reduce((sum, o) => sum + o.grandTotal, 0);
  const commissionEarned = Math.round((totalGmv * (state.adminCommissionRate / 100)) * 100) / 100;

  document.getElementById("adminTotalGmv").textContent = `₹${totalGmv.toLocaleString('en-IN')}`;
  document.getElementById("adminPlatformRevenue").textContent = `₹${commissionEarned.toLocaleString('en-IN')}`;
  document.getElementById("adminTotalOrders").textContent = `${state.ordersHistory.length} Orders`;
  document.getElementById("adminActiveRestCount").textContent = `${state.restaurants.filter(r => r.isActive).length} Active`;
  document.getElementById("adminCommissionRateLabel").textContent = `At ${state.adminCommissionRate}% Platform Commission`;
  document.getElementById("rateBadgeDisplay").textContent = `${state.adminCommissionRate}% Commission`;
  document.getElementById("commissionRangeSlider").value = state.adminCommissionRate;

  // Render Restaurants Table
  renderAdminRestaurantsTable();

  // Render Users Table
  renderAdminUsersTable();

  // Render Complaints
  renderAdminComplaints();
}

function handleCommissionChange(val) {
  state.adminCommissionRate = Number(val);
  document.getElementById("rateBadgeDisplay").textContent = `${val}% Commission`;
  const totalGmv = state.ordersHistory.reduce((sum, o) => sum + o.grandTotal, 0);
  const commissionEarned = Math.round((totalGmv * (val / 100)) * 100) / 100;
  document.getElementById("adminPlatformRevenue").textContent = `₹${commissionEarned.toLocaleString('en-IN')}`;
  document.getElementById("adminCommissionRateLabel").textContent = `At ${val}% Platform Commission`;
  saveState();
}

function switchAdminTab(tabKey, element) {
  document.querySelectorAll("#module-admin .partner-tab-btn").forEach(btn => btn.classList.remove("active"));
  document.querySelectorAll(".admin-tab-content").forEach(c => c.classList.remove("active"));

  if (element) element.classList.add("active");
  const target = document.getElementById(`adminTab-${tabKey}`);
  if (target) target.classList.add("active");
}

function renderAdminRestaurantsTable() {
  const tbody = document.getElementById("adminRestaurantsTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  state.restaurants.forEach(rest => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>
        <strong>${rest.name}</strong><br>
        <small style="color:#64748b;">${rest.cuisines.slice(0, 2).join(", ")}</small>
      </td>
      <td>${rest.location}</td>
      <td>★ ${rest.rating} (${rest.reviewCount})</td>
      <td><span class="badge-fire" style="background:#2563eb;">${rest.commissionTier}</span></td>
      <td>
        <span style="font-weight:700; color:${rest.isActive ? '#10b981' : '#ef4444'}">${rest.isActive ? "Active (Accepting Orders)" : "Suspended"}</span>
      </td>
      <td>
        <button class="btn btn-sm ${rest.isActive ? "btn-danger-outline" : "btn-primary"}" onclick="adminToggleRestStatus('${rest.id}')">
          ${rest.isActive ? "Suspend" : "Activate"}
        </button>
      </td>
    `;
    tbody.appendChild(tr);
  });

  const countBadge = document.getElementById("adminRestTableCount");
  if (countBadge) countBadge.textContent = state.restaurants.length;
}

function adminToggleRestStatus(restId) {
  const rest = state.restaurants.find(r => r.id === restId);
  if (!rest) return;
  rest.isActive = !rest.isActive;
  saveState();
  renderAdminRestaurantsTable();
  showToast(`Restaurant "${rest.name}" status set to: ${rest.isActive ? "Active" : "Suspended"}`, "info");
}

function renderAdminUsersTable() {
  const tbody = document.getElementById("adminUsersTableBody");
  if (!tbody) return;
  tbody.innerHTML = "";

  const users = [
    { name: state.user.name, email: state.user.email, phone: state.user.phone, loc: state.user.address, orders: state.ordersHistory.length, verified: true, active: true },
    { name: "Priya Sundaram", email: "priya@example.com", phone: "+91 98402 88471", loc: "T. Nagar, Chennai", orders: 12, verified: true, active: true },
    { name: "Deepak Verma", email: "deepak@example.com", phone: "+91 98403 11299", loc: "Indiranagar, Bangalore", orders: 8, verified: true, active: true }
  ];

  users.forEach(u => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><strong>${u.name}</strong><br><small style="color:#64748b;">${u.email} • ${u.phone}</small></td>
      <td>${u.loc.substring(0, 32)}...</td>
      <td><strong>${u.orders} Orders</strong></td>
      <td><span style="color:#10b981; font-weight:700;">✓ OTP Verified</span></td>
      <td><span style="color:#10b981; font-weight:700;">Active</span></td>
      <td><button class="btn btn-sm btn-outline-sm" onclick="showToast('Customer record updated.', 'info')">Manage</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function renderAdminComplaints() {
  const container = document.getElementById("adminComplaintsList");
  const countBadge = document.getElementById("adminComplaintCount");
  if (!container) return;
  container.innerHTML = "";

  if (countBadge) countBadge.textContent = state.complaints.length;

  if (state.complaints.length === 0) {
    container.innerHTML = `<div class="empty-state"><h4>Zero open customer complaints! 🌟</h4></div>`;
    return;
  }

  state.complaints.forEach((comp, idx) => {
    const card = document.createElement("div");
    card.className = "complaint-card";
    card.innerHTML = `
      <div class="complaint-meta">
        <div class="complaint-header-row">
          <strong>${comp.id}</strong>
          <span class="badge-fire" style="background:#f59e0b;">${comp.status}</span>
          <small style="color:#64748b;">Ref: ${comp.orderId}</small>
        </div>
        <p class="complaint-reason"><strong>Issue:</strong> ${comp.issue}</p>
        <small style="color:#64748b;">Customer: ${comp.customer} • Restaurant: ${comp.restaurant}</small>
      </div>
      <div style="display:flex; flex-direction:column; gap:6px; min-width:180px;">
        <button class="btn btn-sm btn-primary" onclick="adminResolveComplaint(${idx}, true)">
          Approve Refund (${comp.amount})
        </button>
        <button class="btn btn-sm btn-outline-sm" onclick="adminResolveComplaint(${idx}, false)">
          Dismiss / Resolve
        </button>
      </div>
    `;
    container.appendChild(card);
  });
}

function adminResolveComplaint(idx, isRefund) {
  const comp = state.complaints[idx];
  if (!comp) return;

  state.complaints.splice(idx, 1);
  saveState();
  renderAdminComplaints();
  showToast(isRefund ? `Approved ${comp.amount} refund for ticket ${comp.id}! 💰` : `Ticket ${comp.id} marked resolved! ✅`, "success");
}

// =============================================================================
// 11. TAX INVOICE PRINT & RATING REVIEW MODALS
// =============================================================================

function printInvoice(orderId) {
  const order = state.ordersHistory.find(o => o.orderId === orderId) || state.activeOrder;
  if (!order) {
    showToast("No order details available for invoice.", "danger");
    return;
  }

  document.getElementById("invNum").textContent = `INV-${order.orderId.replace('#', '')}`;
  document.getElementById("invDate").textContent = order.date;
  document.getElementById("invRestName").textContent = order.restaurantName;
  document.getElementById("invCustName").textContent = state.user.name;
  document.getElementById("invCustAddress").textContent = order.deliveryAddress;

  const tbody = document.getElementById("invoiceTableBody");
  tbody.innerHTML = "";
  order.items.forEach((item, idx) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${idx + 1}</td>
      <td>${item.name}</td>
      <td>${item.qty}</td>
      <td>₹${item.price}</td>
      <td>₹${item.price * item.qty}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("invSubtotal").textContent = `₹${order.itemSubtotal}`;
  document.getElementById("invDelivery").textContent = `₹${order.deliveryFee}`;
  document.getElementById("invGst").textContent = `₹${order.gst}`;
  document.getElementById("invDiscount").textContent = `-₹${order.discount}`;
  document.getElementById("invTotal").textContent = `₹${order.grandTotal}`;

  const modal = document.getElementById("invoiceModal");
  if (modal) modal.classList.add("active");
}

function closeInvoiceModal() {
  const modal = document.getElementById("invoiceModal");
  if (modal) modal.classList.remove("active");
}

// Reviews
let currentReviewRating = 5;
function openReviewModal() {
  const modal = document.getElementById("reviewModal");
  if (modal) modal.classList.add("active");
}

function closeReviewModal() {
  const modal = document.getElementById("reviewModal");
  if (modal) modal.classList.remove("active");
}

function setStarRating(num) {
  currentReviewRating = num;
  const stars = document.querySelectorAll("#starRatingGroup .star-btn");
  stars.forEach((s, idx) => {
    s.classList.toggle("active", idx < num);
  });

  const feedbackText = document.getElementById("ratingFeedbackText");
  const feedbacks = [
    "1 Star - Poor quality or delay",
    "2 Stars - Needs significant improvement",
    "3 Stars - Average meal experience",
    "4 Stars - Very good and tasty food!",
    "5 Stars - Outstanding meal & fast delivery!"
  ];
  if (feedbackText) feedbackText.textContent = feedbacks[num - 1];
}

function submitCustomerReview(event) {
  event.preventDefault();
  const comment = document.getElementById("reviewCommentInput").value;
  closeReviewModal();
  playAudioChime(900, "sine", 0.15);
  showToast(`Thank you! Your ${currentReviewRating}-star review was posted! ⭐`, "success");
}

// =============================================================================
// 12. AUTH MODAL (LOGIN, SIGNUP, OTP)
// =============================================================================

function toggleAuthModal() {
  const modal = document.getElementById("authModal");
  if (!modal) return;
  modal.classList.toggle("active");
}

function switchAuthTab(tabKey, element) {
  document.querySelectorAll(".auth-tab-btn").forEach(b => b.classList.remove("active"));
  document.querySelectorAll(".auth-tab-body").forEach(b => b.classList.remove("active"));

  if (element) element.classList.add("active");
  const body = document.getElementById(`authTab-${tabKey}`);
  if (body) body.classList.add("active");
}

function handleEmailLogin(event) {
  event.preventDefault();
  const email = document.getElementById("loginEmail").value;
  state.user.isLoggedIn = true;
  state.user.email = email;
  state.user.name = email.split("@")[0].toUpperCase();
  saveState();
  updateAuthUI();
  toggleAuthModal();
  showToast(`Welcome back, ${state.user.name}! 👋`, "success");
}

function handleSignup(event) {
  event.preventDefault();
  const name = document.getElementById("signupName").value;
  const email = document.getElementById("signupEmail").value;
  const phone = document.getElementById("signupPhone").value;
  state.user = { isLoggedIn: true, name, email, phone, address: state.user.address };
  saveState();
  updateAuthUI();
  toggleAuthModal();
  showToast(`Account created for ${name}! Enjoy FIRST50 coupon. 🎉`, "success");
}

function sendOtpCode() {
  document.getElementById("otpStep1").style.display = "none";
  document.getElementById("otpStep2").style.display = "block";
  showToast("Demo OTP sent! Code is: 1234", "info");
}

function verifyOtpCode() {
  state.user.isLoggedIn = true;
  saveState();
  updateAuthUI();
  toggleAuthModal();
  showToast("Phone verified successfully via OTP! ✅", "success");
}

function updateAuthUI() {
  const btnText = document.getElementById("authBtnText");
  const userName = document.getElementById("dropdownUserName");
  const userEmail = document.getElementById("dropdownUserEmail");

  if (state.user.isLoggedIn) {
    if (btnText) btnText.textContent = state.user.name;
    if (userName) userName.textContent = state.user.name;
    if (userEmail) userEmail.textContent = state.user.email;
  }
}

function handleLogout() {
  state.user.isLoggedIn = false;
  state.user.name = "Guest User";
  saveState();
  updateAuthUI();
  const menu = document.getElementById("userDropdown");
  if (menu) menu.classList.remove("active");
  showToast("Logged out successfully.", "info");
}

// User dropdown toggle
document.addEventListener("click", (e) => {
  const authBtn = document.getElementById("authBtn");
  const dropdown = document.getElementById("userDropdown");
  if (!authBtn || !dropdown) return;

  if (authBtn.contains(e.target)) {
    dropdown.classList.toggle("active");
  } else if (!dropdown.contains(e.target)) {
    dropdown.classList.remove("active");
  }
});

function showOrderHistoryModal() {
  if (state.activeOrder) {
    showOrderTrackingView();
  } else {
    showToast("No active orders found in history.", "info");
  }
}

function showSavedAddresses() {
  showToast(`Current Delivery Address:
${state.user.address}`, "info");
}

// =============================================================================
// 13. AUDIO CHIMES & TOAST NOTIFICATION UTILITIES
// =============================================================================

function showToast(message, type = "info") {
  const container = document.getElementById("toastContainer");
  if (!container) return;

  const toast = document.createElement("div");
  toast.className = `toast toast-${type}`;
  toast.textContent = message;

  container.appendChild(toast);

  setTimeout(() => {
    toast.style.transition = "opacity 0.3s, transform 0.3s";
    toast.style.opacity = "0";
    toast.style.transform = "translateY(10px)";
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// Web Audio API Synthesizer (Zero External Audio Assets Required)
function playAudioChime(freq = 520, type = "sine", duration = 0.1) {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    const ctx = new AudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();

    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.12, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + duration);
  } catch (e) {
    // Audio context may require initial user click in some browsers
  }
}

function playPaymentSuccessChime() {
  setTimeout(() => playAudioChime(523.25, "sine", 0.12), 0);
  setTimeout(() => playAudioChime(659.25, "sine", 0.12), 120);
  setTimeout(() => playAudioChime(783.99, "sine", 0.25), 240);
}

// =============================================================================
// 14. APPLICATION BOOTSTRAP
// =============================================================================

function renderApp() {
  updateAuthUI();
  renderRestaurantGrid();
  updateCartUI();
  if (state.activeOrder) {
    const navBtn = document.getElementById("liveTrackingNavBtn");
    if (navBtn) navBtn.style.display = "inline-flex";
  }
}

// Start on DOM ready
document.addEventListener("DOMContentLoaded", () => {
  initApp();
});

// src/App.jsx

import { Routes, Route } from "react-router-dom";


// Home
import Home from "./pages/Home/Home";

// Products
import ProductsList from "./pages/Products/ProductsList/ProductsList";
import ProductsView from "./pages/Products/ProductsView/ProductsView";

// Categories
import CategoriesList from "./pages/Categories/CategoriesList/CategoriesList";
import CategoriesView from "./pages/Categories/CategoriesView/CategoriesView";

// Users
import UsersList from "./pages/Users/UsersList/UsersList";
import UsersView from "./pages/Users/UsersView/UsersView";

// Errors
import NotFound from "./errors/NotFound/NotFound";

function App() {
  return (
    <div>
      <h1>Admin Dashboard</h1>

      <Routes>
        {/* Home */}
        <Route path="/" element={<Home />} />

        {/* Products */}
        <Route path="/products" element={<ProductsList />} />
        <Route path="/products/:id" element={<ProductsView />} />

        {/* Categories */}
        <Route path="/categories" element={<CategoriesList />} />
        <Route path="/categories/:id" element={<CategoriesView />} />

        {/* Users */}
        <Route path="/users" element={<UsersList />} />
        <Route path="/users/:id" element={<UsersView />} />

        {/* Errors */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;